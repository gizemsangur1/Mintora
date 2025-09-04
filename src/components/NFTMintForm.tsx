"use client";

import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Stack,
} from "@mui/material";

export default function NFTMintForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      title,
      description,
      file,
    });
    alert("Mint işlemi başlatılacak! (dummy)");
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

        <Button
          variant="outlined"
          component="label"
        >
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
        >
          Mint NFT
        </Button>
      </Stack>
    </Box>
  );
}
