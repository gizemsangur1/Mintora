"use client";

import { useEffect, useState } from "react";
import { Container, Typography, Grid } from "@mui/material";
import { useAccount } from "wagmi";
import { fetchNFTsByOwner } from "@/lib/contract";
import NFTCard from "@/components/NFTCard";

export default function ProfilePage() {
  const { address, isConnected } = useAccount();
  const [nfts, setNfts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNFTs() {
      if (address) {
        const data = await fetchNFTsByOwner(address);
        setNfts(data);
      }
      setLoading(false);
    }
    if (isConnected) loadNFTs();
  }, [address, isConnected]);

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        My NFTs
      </Typography>

      {!isConnected ? (
        <Typography color="text.secondary">
          Please connect your wallet to see your NFTs.
        </Typography>
      ) : loading ? (
        <Typography color="text.secondary">Loading NFTs...</Typography>
      ) : nfts.length === 0 ? (
        <Typography color="text.secondary">
          You don’t have any NFTs yet. Mint some first!
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {nfts.map((nft) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={nft.id} display="flex">
              <NFTCard {...nft} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
