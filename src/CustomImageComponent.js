import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="240"
        image="https://picsum.photos/200/300"
        alt="green iguana"
      />
      <CardActions>
        <Button size="small">Any Other options</Button>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
  );
}
