import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

type SinglePostPropsType = {
  title: string;
  description: string;
  image: string;
  imageLabel: string;
};
export default function SinglePost({
  title,
  description,
  image,
  imageLabel,
}: SinglePostPropsType) {
  return (
    <Container sx={{ py: 4 }} maxWidth="md">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={12}>
          <Card
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <CardMedia component="img" image={image} alt={imageLabel} />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography>
                <div dangerouslySetInnerHTML={{ __html: description }}></div>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
