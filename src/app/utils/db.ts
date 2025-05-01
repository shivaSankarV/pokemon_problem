import { PrismaClient } from "@/generated/prisma";

declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma || new PrismaClient();

// Seed function to populate the database with initial Pokemon data
// export async function seedPokemon() {
//   const count = await prisma.pokemon.count();

//   if (count === 0) {
//     const initialPokemon = [
//       {
//         name: "Bulbasaur",
//         types: ["grass,poison"],
//         sprite:
//           "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
//       },
//       {
//         name: "Ivysaur",
//         types: ["grass,poison"],
//         sprite:
//           "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
//       },
//       {
//         name: "Venusaur",
//         types: ["grass,poison"],
//         sprite:
//           "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
//       },
//       {
//         name: "Charmander",
//         types: ["fire"],
//         sprite:
//           "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
//       },
//       {
//         name: "Charmeleon",
//         types: ["fire"],
//         sprite:
//           "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
//       },
//       {
//         name: "Charizard",
//         types: ["fire,flying"],
//         sprite:
//           "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
//       },
//       {
//         name: "Squirtle",
//         types: ["water"],
//         sprite:
//           "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
//       },
//       {
//         name: "Wartortle",
//         types: ["water"],
//         sprite:
//           "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
//       },
//       {
//         name: "Blastoise",
//         types: ["water"],
//         sprite:
//           "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
//       },
//       {
//         name: "Pikachu",
//         types: ["electric"],
//         sprite:
//           "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
//       },
//       {
//         name: "Jigglypuff",
//         types: ["normal,fairy"],
//         sprite:
//           "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
//       },
//       {
//         name: "Gengar",
//         types: ["ghost,poison"],
//         sprite:
//           "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
//       },
//       {
//         name: "Gyarados",
//         types: ["water,flying"],
//         sprite:
//           "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
//       },
//       {
//         name: "Snorlax",
//         types: ["normal"],
//         sprite:
//           "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
//       },
//       {
//         name: "Mewtwo",
//         types: ["psychic"],
//         sprite:
//           "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
//       },
//     ];

//     for (const pokemon of initialPokemon) {
//       await prisma.pokemon.create({
//         data: pokemon,
//       });
//     }

//     console.log("Database seeded with initial Pokemon data");
//   }
// }
