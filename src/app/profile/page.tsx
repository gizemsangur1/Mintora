"use client";

import { Container, Typography, Grid } from "@mui/material";
import { useAccount } from "wagmi";
import { getNFTsByOwner } from "@/lib/nftStore";
import NFTCard from "@/components/NFTCard";

export default function ProfilePage() {
  const { address, isConnected } = useAccount();
  const nfts = address ? getNFTsByOwner(address) : [];

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        My NFTs
      </Typography>

      {!isConnected ? (
        <Typography color="text.secondary">
          Please connect your wallet to see your NFTs.
        </Typography>
      ) : nfts.length === 0 ? (
        <Typography color="text.secondary">
          You don’t have any NFTs yet. Mint some first!
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {nfts.map((nft, index) => (
            <Grid size={{xs:12,sm:6,md:3}}  key={index} display="flex">
              <NFTCard {...nft} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
