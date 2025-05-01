import { z } from "zod";
import { router, publicProcedure } from "../trpc";
import { prisma } from "@/app/utils/db";

// Define a type for Pokemon data
type PokemonData = {
  id: string;
  name: string;
  types: string[];
  sprite: string;
};

// Helper function to transform Pokemon data from DB to API format
const transformPokemon = (pokemon: PokemonData) => ({
  id: pokemon.id,
  name: pokemon.name,
  types: pokemon.types,
  sprite: pokemon.sprite,
});

export const pokemonRouter = router({
  // Get a single Pokemon by name
  getPokemon: publicProcedure.input(z.string()).query(async ({ input }) => {
    const pokemon = await prisma.pokemon.findFirst({
      where: { name: { equals: input, mode: "insensitive" } },
    });

    if (!pokemon) {
      throw new Error(`Pokemon with name "${input}" not found.`);
    }

    return transformPokemon(pokemon);
  }),

  // Get multiple Pokemon by name array
  getMultiplePokemon: publicProcedure
    .input(z.array(z.string()))
    .query(async ({ input }) => {
      const pokemon = await prisma.pokemon.findMany({
        where: {
          name: {
            in: input,
            mode: "insensitive",
          },
        },
      });

      return pokemon.map(transformPokemon);
    }),

  // Get all Pokemon
  getAllPokemon: publicProcedure.query(async () => {
    const pokemon = await prisma.pokemon.findMany({
      orderBy: { id: "asc" },
    });

    return pokemon.map(transformPokemon);
  }),

  // Get Pokemon by type
  getPokemonByType: publicProcedure
    .input(z.string().optional())
    .query(async ({ input }) => {
      const pokemon = await prisma.pokemon.findMany({
        where: input
          ? {
              types: {
                has: input,
              },
            }
          : undefined,
        orderBy: { id: "asc" },
      });

      return pokemon.map(transformPokemon);
    }),
});
