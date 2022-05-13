import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Copyright from "./Copyright";
import Link from "@mui/material/Link";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "background.paper", py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          <img src="/logo.png" alt="foodnutris" width="150" />
        </Typography>
        <Link href="https://www.facebook.com/foodnutris" target="_blank">
          <Stack
            direction="row"
            spacing={1}
            sx={{ marginLeft: "45%", mb: 2, mt: 1, fontWeight: 600 }}
          >
            <FacebookIcon />
            <span>Facebook</span>
          </Stack>
        </Link>
        <Copyright />
      </Container>
    </Box>
  );
}
