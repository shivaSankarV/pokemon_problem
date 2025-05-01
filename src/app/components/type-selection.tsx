"use client";

import type React from "react";

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  type SelectChangeEvent,
} from "@mui/material";

// Define the props for the PokemonTypeSelection component
export interface PokemonTypeSelectionProps {
  selectedType: string | undefined;
  selectType: (type: string | undefined) => void;
}

// List of all Pokemon types
const pokemonTypes = [
  "normal",
  "fire",
  "water",
  "electric",
  "grass",
  "ice",
  "fighting",
  "poison",
  "ground",
  "flying",
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dragon",
  "dark",
  "steel",
  "fairy",
];

export const PokemonTypeSelection: React.FC<PokemonTypeSelectionProps> = ({
  selectedType,
  selectType,
}) => {
  const handleChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    selectType(value === "all" ? undefined : value);
  };

  return (
    <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
      <InputLabel id="pokemon-type-select-label">Filter by Type</InputLabel>
      <Select
        labelId="pokemon-type-select-label"
        id="pokemon-type-select"
        value={selectedType || "all"}
        onChange={handleChange}
        label="Filter by Type"
      >
        <MenuItem value="all">All Types</MenuItem>
        {pokemonTypes.map((type) => (
          <MenuItem key={type} value={type}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
