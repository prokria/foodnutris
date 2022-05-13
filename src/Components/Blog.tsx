import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import SinglePost from "./SinglePost";
import Sidebar from "./Sidebar";

type BlogPropsType = {
  title: string;
  posts: any[];
};
export default function Blog({ title, posts }: BlogPropsType) {
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
          {title}
        </Typography>
        <Divider />
        {posts &&
          posts.map((post: any) => (
            <SinglePost
              title={post.title}
              description={post.excerpt}
              image={`/images/${post.featured_media}`}
              imageLabel={post.glycolysis}
            />
          ))}
      </Grid>
      <Sidebar />
    </>
  );
}
