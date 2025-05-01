"use client";

import type React from "react";

import { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Container,
  Alert,
  Snackbar,
  Chip,
  Stack,
} from "@mui/material";
// import { PokedexTable } from "@/components/pokedex-table";
import Link from "next/link";
import { trpc } from "../utils/trpc";

export default function MultiPokemonPage() {
  const [pokemonInput, setPokemonInput] = useState("");
  const [pokemonNames, setPokemonNames] = useState<string[]>([]);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const {
    data: pokemon,
    isLoading,
    isError,
    error,
  } = trpc.pokemon.getMultiplePokemon.useQuery(pokemonNames, {
    enabled: pokemonNames.length > 0,
    retry: false,
  });

  useEffect(() => {
    if (isError && error) {
      setErrorMsg(error.message);
    }
  }, [isError, error]);

  const handleAddPokemon = () => {
    if (pokemonInput.trim()) {
      setPokemonNames((prev) => [...prev, pokemonInput.trim()]);
      setPokemonInput("");
    }
  };

  const handleRemovePokemon = (name: string) => {
    setPokemonNames((prev) => prev.filter((p) => p !== name));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAddPokemon();
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Pokedex - Multiple Pokemon Search
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 4 }}>
          <Button component={Link} href="/" variant="outlined" color="primary">
            Single Search
          </Button>
          <Button
            component={Link}
            href="/multi"
            variant="contained"
            color="primary"
          >
            Multiple Search
          </Button>
          <Button
            component={Link}
            href="/filter"
            variant="outlined"
            color="primary"
          >
            Filter by Type
          </Button>
        </Box>

        <Paper sx={{ p: 3, mb: 4 }}>
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
              <TextField
                fullWidth
                label="Enter Pokemon Name"
                variant="outlined"
                value={pokemonInput}
                onChange={(e) => setPokemonInput(e.target.value)}
                placeholder="e.g. Pikachu"
              />
              <Button
                onClick={handleAddPokemon}
                variant="contained"
                color="primary"
                disabled={!pokemonInput.trim()}
              >
                Add
              </Button>
            </Box>
          </form>

          {pokemonNames.length > 0 && (
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                Selected Pokemon:
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {pokemonNames.map((name) => (
                  <Chip
                    key={name}
                    label={name}
                    onDelete={() => handleRemovePokemon(name)}
                    color="primary"
                    variant="outlined"
                    sx={{ mb: 1 }}
                  />
                ))}
              </Stack>
            </Box>
          )}
        </Paper>

        {/* <PokedexTable
          pokemon={pokemon}
          isLoading={isLoading}
          error={isError ? new Error("Failed to fetch Pokémon") : null}
        /> */}

        <Snackbar
          open={!!error}
          autoHideDuration={6000}
          onClose={() => setErrorMsg(null)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert onClose={() => setErrorMsg(null)} severity="error">
            {errorMsg}
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  );
}
