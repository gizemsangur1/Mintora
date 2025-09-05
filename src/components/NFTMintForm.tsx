"use client";

import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Stack,
} from "@mui/material";
import { uploadToIPFS } from "@/lib/ipfs";
// import { CONTRACT_ADDRESS } from "@/lib/contract";
// import { ethers } from "ethers";
// import MintoraNFT from "@/lib/MintoraNFT.json"; 

export default function NFTMintForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setPreviewUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      alert("Please upload an image!");
      return;
    }

    setLoading(true);
    try {
      //  Metadata IPFS'e yükle
      const ipfsUrl = await uploadToIPFS(title, description, file);

      //  Şimdilik sadece IPFS URL gösterilecek
      alert(`NFT Metadata uploaded to IPFS:\n${ipfsUrl}`);
      console.log("Simulated Mint - IPFS URL:", ipfsUrl);

      /*
       Gerçek Mint Kısmı (Sepolia ETH gelince açacılacak)
      if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(CONTRACT_ADDRESS, MintoraNFT.abi, signer);

        const tx = await contract.mintNFT(await signer.getAddress(), ipfsUrl);
        await tx.wait();
        alert("NFT minted successfully!");
      } else {
        alert("Please install MetaMask!");
      }
      */
    } catch (error) {
      console.error("IPFS upload error:", error);
      alert("Failed to upload to IPFS!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 500,
        mx: "auto",
        p: 3,
        bgcolor: "background.paper",
        borderRadius: 3,
        boxShadow: 3,
      }}
    >
      <Typography variant="h5" color="primary" gutterBottom>
        Mint a New NFT
      </Typography>

      <Stack spacing={2}>
        <TextField
          label="NFT Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          fullWidth
        />

        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          multiline
          rows={3}
          fullWidth
        />

        <Button variant="outlined" component="label">
          Upload Image
          <input type="file" hidden onChange={handleFileChange} />
        </Button>

        {file && (
          <Typography variant="body2" color="text.secondary">
            Selected: {file.name}
          </Typography>
        )}

        {previewUrl && (
          <Box
            component="img"
            src={previewUrl}
            alt="Preview"
            sx={{ width: "100%", borderRadius: 2 }}
          />
        )}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Simulate Mint"}
        </Button>
      </Stack>
    </Box>
  );
}
