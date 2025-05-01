import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "@/app/server/routers/_app";
import { initTRPC } from "@trpc/server";
import superjson from "superjson";
import { ZodError } from "zod";

const t = initTRPC.create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

export const trpc = createTRPCReact<AppRouter>();
export const router = t.router;
export const publicProcedure = t.procedure;
