import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import posts from "../Posts/all.json";
import { useParams } from "react-router-dom";
import Sidebar from "./../Components/Sidebar";

export default function SinglePost() {
  const [post, setPost] = useState<any>(null);
  const { slug } = useParams();

  useEffect(() => {
    if (posts && posts.length && slug) {
      posts.forEach((post: any, index: number) => {
        if (post.slug === slug) {
          setPost(post);
        }
      });
    }
  }, [slug]);

  return (
    <Container sx={{ py: 3 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={9} md={9}>
          {post && (
            <>
              <Typography
                variant="h5"
                sx={{
                  marginBottom: 4,
                  marginTop: 2,
                  textAlign: "center",
                  fontWeight: 600,
                }}
              >
                {post.title}
              </Typography>

              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  image={`/images/${post.featured_media}`}
                  alt={post.slug}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography>
                    <div
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    ></div>
                  </Typography>
                </CardContent>
              </Card>
            </>
          )}
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <Sidebar />
        </Grid>
      </Grid>
    </Container>
  );
}
