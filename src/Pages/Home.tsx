import * as React from "react";
import Grid from "@mui/material/Grid";
import MainFeaturedPost from "../Components/MainFeaturedPost";
import FeaturedPost from "../Components/FeaturedPost";
import Main from "../Components/Main";
import featuredPosts from "../Posts/featuredPost.json";
import mainFeaturedPost from "../Posts/mainFeaturedPost.json";

export default function Home() {
  return (
    <>
      <MainFeaturedPost post={mainFeaturedPost} />
      <Grid container spacing={4}>
        {featuredPosts.map((post: any) => (
          <FeaturedPost key={post.title} post={post} />
        ))}
      </Grid>
      <Grid container spacing={5} sx={{ mt: 3 }}>
        <Main />
      </Grid>
    </>
  );
}
