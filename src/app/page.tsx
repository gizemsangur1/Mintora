"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Box, Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="sm">
      <Box
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Typography variant="h2" color="primary" gutterBottom>
          Mintora
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          NFT Marketplace & DAO Governance
        </Typography>
        <ConnectButton />
      </Box>
    </Container>
  );
}
