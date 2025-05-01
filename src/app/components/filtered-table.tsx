"use client";

import type React from "react";

import { useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
// import { PokemonTypeSelection } from "./pokemon-type-selection"
// import { PokedexTable } from "./pokedex-table"
import { trpc } from "../utils/trpc";

export const FilterablePokedexTable: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | undefined>(
    undefined
  );

  const {
    data: pokemon,
    isLoading,
    error,
  } = trpc.pokemon.getPokemonByType.useQuery(selectedType, {
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });

  return (
    <Box sx={{ p: 2 }}>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Filterable Pokedex
        </Typography>

        {/* <PokemonTypeSelection selectedType={selectedType} selectType={setSelectedType} />

        <PokedexTable pokemon={pokemon} isLoading={isLoading} error={error instanceof Error ? error : null} /> */}
      </Paper>
    </Box>
  );
};
