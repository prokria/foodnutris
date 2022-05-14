import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import MainFeaturedPost from "../Components/MainFeaturedPost";
import FeaturedPost from "../Components/FeaturedPost";
import Blog from "../Components/Blog";
import posts from "../Posts/all.json";

export default function Home() {
  const [latests, setLatests] = useState<any[]>([]);
  const [mainFeatured, setMainFeatured] = useState<any>(null);
  const [featureds, setFeatureds] = useState<any[]>([]);

  useEffect(() => {
    if (posts && posts.length) {
      const latestPosts: any[] = [];
      const featuredPosts: any[] = [];
      posts.forEach((post: any, index: number) => {
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
  }, []);

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
}
