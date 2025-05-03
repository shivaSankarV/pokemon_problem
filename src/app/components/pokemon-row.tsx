"use client";

import type React from "react";

import {
  TableRow,
  TableCell,
  Chip,
  Avatar,
  Box,
  Typography,
} from "@mui/material";

// Define the Pokemon type
export type Pokemon = {
  id: string;
  name: string;
  types: string[];
  sprite: string;
};

// Define the props for the PokemonRow component
interface PokemonRowProps {
  pokemon: Pokemon;
}

// Color mapping for Pokemon types
const typeColors: Record<string, string> = {
  normal: "#A8A878",
  fire: "#F08030",
  water: "#6890F0",
  electric: "#F8D030",
  grass: "#78C850",
  ice: "#98D8D8",
  fighting: "#C03028",
  poison: "#A040A0",
  ground: "#E0C068",
  flying: "#A890F0",
  psychic: "#F85888",
  bug: "#A8B820",
  rock: "#B8A038",
  ghost: "#705898",
  dragon: "#7038F8",
  dark: "#705848",
  steel: "#B8B8D0",
  fairy: "#EE99AC",
};

export const PokemonRow: React.FC<PokemonRowProps> = ({ pokemon }) => {
  return (
    <TableRow hover>
      <TableCell align="center">
        <Typography variant="body1">{pokemon.name}</Typography>
      </TableCell>
      <TableCell>
        <Avatar
          src={pokemon.sprite}
          alt={pokemon.name}
          sx={{
            width: 50,
            height: 50,
            objectFit: "contain",
            justifySelf: "center",
            transition: "transform 0.3s ease", // Smooth transition
            "&:hover": {
              transform: "scale(1.5)", // Increase size on hover
            },
          }}
        />
      </TableCell>
      <TableCell>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            justifyContent: "center",
          }}
        >
          {pokemon.types.map((type) => (
            <Chip
              key={type}
              label={type}
              size="small"
              sx={{
                backgroundColor: typeColors[type.toLowerCase()] || "#777",
                color: "#fff",
                fontWeight: "bold",
              }}
            />
          ))}
        </Box>
      </TableCell>
    </TableRow>
  );
};
