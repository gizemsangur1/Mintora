"use client";

import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";

type Props = {
  title: string;
  description: string;
  image: string;
  ipfsUrl: string;
};

export default function NFTCard({ title, description, image, ipfsUrl }: Props) {
  return (
    <Card sx={{ maxWidth: 300, height: "100%", display: "flex", flexDirection: "column" }}>
      {image && <CardMedia component="img" height="200" image={image} alt={title} />}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom>{title}</Typography>
        <Typography variant="body2" color="text.secondary">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          size="small"
          onClick={() => window.open(ipfsUrl, "_blank")}
        >
          View Metadata
        </Button>
      </CardActions>
    </Card>
  );
}
