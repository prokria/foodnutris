import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import posts from "../Posts/all.json";
import tags from "../Posts/tags.json";
import { useParams } from "react-router-dom";
import Sidebar from "./../Components/Sidebar";

export default function Category() {
  const [categoryName, setCategoryName] = useState("");
  const [categoryPosts, setCategoryPosts] = useState<any[]>([]);
  const { slug } = useParams();

  useEffect(() => {
    if (tags && tags.length && slug) {
      const allCatPosts: any[] = [];
      tags.forEach((categ: any) => {
        if (categ.slug === slug) {
          setCategoryName(categ.name);
          if (posts && posts.length) {
            posts.map(
              (post: any) =>
                post.tags?.includes(categ.id) && allCatPosts.push(post)
            );
          }
        }
      });
      setCategoryPosts(allCatPosts);
    }
  }, [slug]);

  return (
    <Container sx={{ py: 2 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={9} md={9}>
          <Typography
            variant="h6"
            sx={{ marginBottom: 4, marginTop: 2, textAlign: "center" }}
          >
            {categoryName
              ? `${categoryName} এর পোস্ট সমূহ`
              : "Category Not Found"}
          </Typography>
          {categoryPosts.length ? (
            categoryPosts.map((post: any) => (
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: 4,
                }}
              >
                <CardMedia
                  component="img"
                  image={`/images/${post.featured_media}`}
                  alt={post.slug}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Link underline="none" href={post.link}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {post.title}
                    </Typography>
                  </Link>
                  <Typography>
                    <div
                      dangerouslySetInnerHTML={{ __html: post.excerpt }}
                    ></div>
                  </Typography>
                </CardContent>
              </Card>
            ))
          ) : (
            <Typography variant="h5" sx={{ textAlign: "center", margin: 5 }}>
              No Posts Found
            </Typography>
          )}
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <Sidebar />
        </Grid>
      </Grid>
    </Container>
  );
}
