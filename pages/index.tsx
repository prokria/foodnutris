import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import MainFeaturedPost from "../components/MainFeaturedPost";
import FeaturedPost from "../components/FeaturedPost";
import Blog from "../components/Blog";
import axios from "axios";

const Home: NextPage = () => {
  const [latests, setLatests] = useState<any[]>([]);
  const [mainFeatured, setMainFeatured] = useState<any>(null);
  const [featureds, setFeatureds] = useState<any[]>([]);
  const [allPosts, setAllPosts] = useState<any[]>([]);

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
    if (allPosts && allPosts.length) {
      const latestPosts: any[] = [];
      const featuredPosts: any[] = [];
      allPosts.forEach((post: any, index: number) => {
        if (index > 2 && index < 6) {
          latestPosts.push(post);
        }
        if (post.type === "featured") {
          featuredPosts.push(post);
        }
        if (post.type === "mainfeatured") {
          setMainFeatured(post);
        }
      });
      setLatests(latestPosts);
      setFeatureds(featuredPosts);
    }
  }, [allPosts]);
  return (
    <>
      {mainFeatured && (
        <MainFeaturedPost
          description={mainFeatured.excerpt}
          image={mainFeatured.featured_media}
          imageText={mainFeatured.slug}
          title={mainFeatured.title}
          linkText={mainFeatured.link}
        />
      )}

      <Grid container spacing={4}>
        {featureds.map((post: any) => (
          <FeaturedPost
            key={post.id}
            description={post.excerpt}
            image={post.featured_media}
            imageText={post.slug}
            title={post.title}
            linkText={post.link}
          />
        ))}
      </Grid>
      <Grid container spacing={5} sx={{ mt: 3 }}>
        <Blog title="সর্বশেষ পোস্ট সমূহ" posts={latests} />
      </Grid>
    </>
  );
};

export default Home;
