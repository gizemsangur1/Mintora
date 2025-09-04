"use client";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

type NFTCardProps = {
  image: string;
  title: string;
  description: string;
  price: string;
};

export default function NFTCard({
  image,
  title,
  description,
  price,
}: NFTCardProps) {
  return (
    <Card
      sx={{
        maxWidth: 300,
        bgcolor: "background.paper",
        borderRadius: 3,
        boxShadow: 3,
		height:"100%",
		display:"flex",
		flexDirection:"column"
      }}
    >
      <CardMedia component="img" height="200" image={image} alt={title} />
      <CardContent sx={{flexGrow:1}}>
        <Typography variant="h6" color="primary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {description}
        </Typography>
        <Typography variant="subtitle1" color="secondary">
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" fullWidth>
          Buy
        </Button>
      </CardActions>
    </Card>
  );
}
