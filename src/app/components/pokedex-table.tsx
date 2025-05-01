"use client";

import type React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import { PokemonRow, type Pokemon } from "./pokemon-row";

interface PokedexTableProps {
  pokemon: Pokemon[] | undefined;
  isLoading?: boolean;
  error?: Error | null;
}

export const PokedexTable: React.FC<PokedexTableProps> = ({
  pokemon,
  isLoading = false,
  error = null,
}) => {
  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", p: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 2 }}>
        <Typography color="error">Error: {error.message}</Typography>
      </Box>
    );
  }

  if (!pokemon || pokemon.length === 0) {
    return (
      <Box sx={{ p: 2 }}>
        <Typography>No Pokémon found.</Typography>
      </Box>
    );
  }

  return (
    <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Table sx={{ minWidth: 650 }} aria-label="pokemon table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Pokémon</TableCell>
            <TableCell>Types</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pokemon.map((p) => (
            <PokemonRow key={p.id} pokemon={p} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
