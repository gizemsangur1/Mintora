"use client";

import { Container, Typography } from "@mui/material";
import NFTMintForm from "@/components/NFTMintForm";

export default function MintPage() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Mint NFT
      </Typography>
      <NFTMintForm />
    </Container>
  );
}
