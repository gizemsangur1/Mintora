"use client";

import { Container, Typography, Grid } from "@mui/material";
import NFTCard from "@/components/NFTCard";

const dummyNFTs = [
  {
    image: "https://picsum.photos/400/300?random=1",
    title: "CryptoPunk #001",
    description: "A rare punk with sunglasses.",
    price: "0.05 ETH",
  },
  {
    image: "https://picsum.photos/400/300?random=2",
    title: "PixelArt Cat",
    description: "Retro style pixelated kitty.",
    price: "0.02 ETH",
  },
  {
    image: "https://picsum.photos/400/300?random=3",
    title: "Galaxy Ape",
    description: "Cosmic ape exploring the metaverse.",
    price: "0.1 ETH",
  },
  {
    image: "https://picsum.photos/400/300?random=4",
    title: "Aurora Fox",
    description: "Shining fox in aurora lights.",
    price: "0.08 ETH",
  },
];

export default function MarketplacePage() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Marketplace
      </Typography>
      <Grid container spacing={3}>
        {dummyNFTs.map((nft, index) => (
          <Grid key={index} size={{xs:12,sm:6,md:3}} >
            <NFTCard {...nft} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
