"use client";

import { Container, Typography, Grid } from "@mui/material";
import { getNFTs } from "../../lib/nftStore";
import NFTCard from "@/components/NFTCard";

export default function MarketplacePage() {
  const nfts = getNFTs();

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Marketplace
      </Typography>
      {nfts.length === 0 ? (
        <Typography color="text.secondary">No NFTs yet. Mint some first!</Typography>
      ) : (
        <Grid container spacing={3}>
          {nfts.map((nft, index) => (
            <Grid size={{xs:12,md:3,sm:6}} key={index} display="flex">
              <NFTCard {...nft} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
