"use client";

import { Box, Container, Typography, Button } from "@mui/material";

import Link from "next/link";
import { FilterablePokedexTable } from "../components/filtered-table";

export default function FilterPokemonPage() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Pokédex - Filter by Type
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 4 }}>
          <Button component={Link} href="/" variant="outlined" color="primary">
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
            variant="contained"
            color="primary"
          >
            Filter by Type
          </Button>
        </Box>

        <FilterablePokedexTable />
      </Box>
    </Container>
  );
}
