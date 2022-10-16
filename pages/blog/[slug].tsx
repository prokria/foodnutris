import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Sidebar from "../../components/Sidebar";
import axios from "axios";
import { useRouter } from "next/router";

const SinglePost: NextPage = () => {
  const [post, setPost] = useState<any>(null);
  const router = useRouter();
  const slug = router.query.slug;

  useEffect(() => {
    axios
      .get("https://arwa.info/foodnutrisdata/all.json")
      .then(function (response) {
        // handle success
        if (response.status === 200) {
          response.data?.forEach((post: any, index: number) => {
            if (post.slug === slug) {
              setPost(post);
            }
          });
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
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
};
export default SinglePost;
