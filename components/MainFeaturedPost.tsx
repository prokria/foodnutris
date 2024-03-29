import * as React from "react";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Image from "next/image";

export interface MainFeaturedPostPropsType {
  description: string;
  image: string;
  imageText: string;
  linkText: string;
  title: string;
}

export default function MainFeaturedPost({
  description,
  image,
  imageText,
  linkText,
  title,
}: MainFeaturedPostPropsType) {
  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(/images/${image})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {
        <Image
          style={{ display: "none" }}
          src={`/images/${image}`}
          alt={imageText}
          layout="fill"
        />
      }
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.3)",
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              <Link
                sx={{ textDecoration: "none", color: "#FFF" }}
                href={linkText}
              >
                {title}
              </Link>
            </Typography>
            <div className="mainFeturedContent">
              <div dangerouslySetInnerHTML={{ __html: description }}></div>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
