"use client";

import { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  Stack,
} from "@mui/material";
import { addProposal, getProposals, vote } from "@/lib/daoStore";

export default function DAOPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [proposals, setProposals] = useState(getProposals());

  const handleAdd = () => {
    if (!title || !description) return;
    addProposal(title, description);
    setProposals(getProposals());
    setTitle("");
    setDescription("");
  };

  const handleVote = (id: number, support: boolean) => {
    vote(id, support);
    setProposals(getProposals());
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        DAO Governance
      </Typography>

      <Stack spacing={2} sx={{ mb: 4 }}>
        <TextField
          label="Proposal Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
        />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          multiline
          rows={3}
          fullWidth
        />
        <Button variant="contained" onClick={handleAdd}>
          Create Proposal
        </Button>
      </Stack>

      <Grid container spacing={3}>
        {proposals.map((p) => (
          <Grid size={{xs:12,md:6}}  key={p.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{p.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {p.description}
                </Typography>
                <Typography sx={{ mt: 1 }}>
                   Yes: {p.votesYes} |  No: {p.votesNo}
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => handleVote(p.id, true)}>Vote Yes</Button>
                <Button onClick={() => handleVote(p.id, false)}>Vote No</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
