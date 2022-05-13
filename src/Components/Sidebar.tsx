import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import tags from "../Posts/tags.json";

export default function Sidebar() {
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
            href={`/tags/${tag.slug}`}
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
