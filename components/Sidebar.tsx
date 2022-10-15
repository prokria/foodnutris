import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import axios from "axios";

export default function Sidebar() {
  const [tags, setTags] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("https://arwa.info/foodnutrisdata/tags.json")
      .then(function (response) {
        // handle success
        if (response.status === 200) {
          setTags(response.data);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <>
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          mt: 3,
          textAlign: "center",
          borderBottom: "1px solid #DDD",
          mb: 3,
        }}
      >
        Tags
      </Typography>
      {tags &&
        tags.map((tag: any) => (
          <Link
            display="inline"
            href={`/tag/${tag.slug}`}
            key={tag.id}
            sx={{
              textDecoration: "none",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                float: "left",
                marginLeft: 1,
                marginTop: 0.5,
                marginBottom: 0.5,
                padding: 1,
                background: "#FFF",
                borderRadius: 5,
              }}
            >
              {tag.name}
            </Typography>
          </Link>
        ))}
    </>
  );
}
