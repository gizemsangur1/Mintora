"use client";

import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Navbar() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h5"
          component={Link}
          href="/"
          sx={{
            textDecoration: "none",
            color: "primary.main",
            fontWeight: "bold",
            fontFamily: "Orbitron, sans-serif",
          }}
        >
          Mintora
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button component={Link} href="/marketplace" color="inherit">
            Marketplace
          </Button>
          <Button component={Link} href="/mint" color="inherit">
            Mint
          </Button>
          <Button component={Link} href="/dao" color="inherit">
            DAO
          </Button>
          <Button component={Link} href="/profile" color="inherit">
            Profile
          </Button>
        </Box>

        <ConnectButton />
      </Toolbar>
    </AppBar>
  );
}
