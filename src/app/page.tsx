"use client";

import { use, useEffect, useState } from "react";

import {
  Alert,
  Box,
  Button,
  Container,
  Paper,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { trpc } from "./utils/trpc";

export default function Home() {
  const [pokemonName, setPokemonName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const {
    data: pokemon,
    isLoading,
    isError,
    error,
  } = trpc.pokemon.getPokemon.useQuery(searchTerm, {
    enabled: searchTerm !== "",
    retry: false,
  });

  useEffect(() => {
    if (isError && error) {
      setErrorMsg(error.message);
    }
  }, [isError, error]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSearchTerm(pokemonName.trim());
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Pokedex - Single Pokemon Search
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 4 }}>
          <Button component={Link} href="/" variant="contained" color="primary">
            Single Search
          </Button>
          <Button
            component={Link}
            href="/multi"
            variant="outlined"
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
            <Box sx={{ display: "flex", gap: 2 }}>
              <TextField
                fullWidth
                label="Enter Pokemon Name"
                variant="outlined"
                value={pokemonName}
                onChange={(e) => setPokemonName(e.target.value)}
                placeholder="e.g. Pikachu"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={!pokemonName.trim()}
              >
                Search
              </Button>
            </Box>
          </form>
        </Paper>

        {isLoading && <Typography align="center">Loading...</Typography>}

        {/* {pokemon && (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Pokémon</TableCell>
                  <TableCell>Types</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <PokemonRow pokemon={pokemon} />
              </TableBody>
            </Table>
          </TableContainer>
        )} */}

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
