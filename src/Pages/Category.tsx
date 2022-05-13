import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import posts from "../Posts/all.json";
import categories from "../Posts/categories.json";
import { useParams } from "react-router-dom";
import Sidebar from "./../Components/Sidebar";

export default function Category() {
  const [categoryName, setCategoryName] = useState("");
  const [categoryPosts, setCategoryPosts] = useState<any[]>([]);
  const { slug } = useParams();

  useEffect(() => {
    if (categories && categories.length && slug) {
      const allCatPosts: any[] = [];
      categories.forEach((categ: any) => {
        if (categ.slug === slug) {
          setCategoryName(categ.name);
          if (posts && posts.length) {
            posts.map(
              (post: any) =>
                post.categories?.includes(categ.id) && allCatPosts.push(post)
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
            variant="h5"
            sx={{ marginBottom: 4, marginTop: 2, textAlign: "center" }}
          >
            Posts for{" "}
            <strong>
              {categoryName ? categoryName : "Category Not Found"}
            </strong>
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
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                  </Typography>
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
