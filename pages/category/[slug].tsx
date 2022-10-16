import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Sidebar from "../../components/Sidebar";
import axios from "axios";
import { useRouter } from "next/router";

const Category: NextPage = () => {
  const [categoryName, setCategoryName] = useState("");
  const [allPosts, setAllPosts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [categoryPosts, setCategoryPosts] = useState<any[]>([]);
  const router = useRouter();
  const slug = router.query.slug;

  useEffect(() => {
    axios
      .get("https://arwa.info/foodnutrisdata/categories.json")
      .then(function (response) {
        if (response.status === 200) {
          setCategories(response.data);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://arwa.info/foodnutrisdata/all.json")
      .then(function (response) {
        // handle success
        if (response.status === 200) {
          setAllPosts(response.data);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (categories && categories.length && slug) {
      const allCatPosts: any[] = [];
      categories.forEach((categ: any) => {
        if (categ.slug === slug) {
          setCategoryName(categ.name);
          if (allPosts && allPosts.length) {
            allPosts.map(
              (post: any) =>
                post.categories?.includes(categ.id) && allCatPosts.push(post)
            );
          }
        }
      });
      setCategoryPosts(allCatPosts);
    }
  }, [allPosts, categories, slug]);

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
            categoryPosts.map((post: any, index: number) => (
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: 4,
                }}
                key={index}
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
};
export default Category;
