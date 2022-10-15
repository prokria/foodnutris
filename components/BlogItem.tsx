import * as React from "react";
import Card from "@mui/material/Card";
import Link from "@mui/material/Link";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

type BlogItemPropsType = {
  title: string;
  description: string;
  image: string;
  imageLabel: string;
  link: string;
};
export default function BlogItem({
  title,
  description,
  image,
  imageLabel,
  link,
}: BlogItemPropsType) {
  return (
    <Container sx={{ py: 4 }} maxWidth="md">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={12}>
          <Card
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <CardMedia component="img" image={image} alt={imageLabel} />
            <CardContent sx={{ flexGrow: 1 }}>
              <Link underline="none" href={link}>
                <Typography gutterBottom variant="h5" component="h2">
                  {title}
                </Typography>
              </Link>
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
