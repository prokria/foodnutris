import { Box } from "@mui/material";
import React from "react";

export default function NoPage() {
  return (
    <Box
      sx={{
        margin: 5,
        padding: 6,
        textAlign: "center",
        fontWeight: 600,
        fontSize: 30,
        minHeight: "30vh",
      }}
    >
      Content Not Found: 404
    </Box>
  );
}
