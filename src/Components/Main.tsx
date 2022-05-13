import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import posts from "../Posts/all.json";
import SinglePost from "./SinglePost";
import Sidebar from "./Sidebar";

export default function Main() {
  return (
    <>
      <Grid
        item
        xs={12}
        md={9}
        sx={{
          "& .markdown": {
            py: 3,
          },
        }}
      >
        <Typography variant="h6" gutterBottom>
          All Post
        </Typography>
        <Divider />
        {posts &&
          posts.map((post: any) => (
            <SinglePost
              title={post.title?.rendered}
              date={post.date}
              description={post.content?.rendered}
              image="https://source.unsplash.com/random"
              imageLabel="random"
            />
          ))}
      </Grid>
      <Sidebar />
    </>
  );
}
