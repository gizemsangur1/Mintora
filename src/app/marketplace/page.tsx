"use client";

import { useEffect, useState } from "react";
import { Container, Typography, Grid } from "@mui/material";
import NFTCard from "@/components/NFTCard";
import { fetchNFTs } from "@/lib/contract";

export default function MarketplacePage() {
  const [nfts, setNfts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNFTs() {
      try {
        const data = await fetchNFTs();
        setNfts(data);
      } catch (err) {
        console.error("Error loading NFTs:", err);
      } finally {
        setLoading(false);
      }
    }
    loadNFTs();
  }, []);

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Marketplace
      </Typography>
      {loading ? (
        <Typography color="text.secondary">Loading NFTs...</Typography>
      ) : nfts.length === 0 ? (
        <Typography color="text.secondary">
          No NFTs minted yet!
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {nfts.map((nft) => (
            <Grid key={nft.id} size={{xs:12,sm:6,md:3}} display="flex">
              <NFTCard {...nft} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
