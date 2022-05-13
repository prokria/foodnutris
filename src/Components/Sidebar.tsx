import * as React from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import tags from "../Posts/tags.json";

export default function Sidebar() {
  return (
    <Grid item xs={12} md={3}>
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Tags
      </Typography>
      {tags &&
        tags.map((tag: any) => (
          <Link
            display="block"
            variant="body1"
            href={`/tags/${tag.slug}`}
            key={tag.id}
            sx={{ mb: 0.5 }}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <span>{tag.name}</span>
            </Stack>
          </Link>
        ))}
    </Grid>
  );
}
