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

export default function NFTMintForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
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
      const ipfsUrl = await uploadToIPFS(title, description, file);
      alert(`NFT Metadata uploaded to IPFS:\n${ipfsUrl}`);
      console.log("IPFS URL:", ipfsUrl);
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
          size="sm"
          fullWidth
        />

        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          multiline
          rows={3}
          size="sm"
          fullWidth
        />

        <Button variant="outlined" component="label" size="sm">
          Upload Image
          <input type="file" hidden onChange={handleFileChange} />
        </Button>
        {file && (
          <Typography variant="body2" color="text.secondary">
            Selected: {file.name}
          </Typography>
        )}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="sm"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Mint NFT"}
        </Button>
      </Stack>
    </Box>
  );
}
