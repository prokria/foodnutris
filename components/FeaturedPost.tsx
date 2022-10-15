import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Link from "@mui/material/Link";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

interface FeaturedPostProps {
  description: string;
  image: string;
  imageText: string;
  linkText: string;
  title: string;
}

export default function FeaturedPost({
  description,
  image,
  imageText,
  linkText,
  title,
}: FeaturedPostProps) {
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              <Link sx={{ textDecoration: "none" }} href={linkText}>
                {title}
              </Link>
            </Typography>
            <Typography variant="subtitle1" paragraph>
              <div dangerouslySetInnerHTML={{ __html: description }}></div>
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: "none", sm: "block" } }}
            image={`/images/${image}`}
            alt={imageText}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}
