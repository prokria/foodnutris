import type { NextPage } from "next";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Button, Link } from "@mui/material";

const SinglePost: NextPage = () => {
  return (
    <Container sx={{ py: 3 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={6} sx={{ margin: "0 auto" }}>
          <Card variant="outlined">
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Nutritionist
              </Typography>
              <Typography variant="h4" component="div">
                Ayesha Akter
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Expert in Diet Planning
              </Typography>
              <Typography variant="body2">
                B.Sc. in Food and Nutrition Science, Dhaka University
              </Typography>
              <Typography variant="body2">
                Diploma in Diet Planing,
                <Link
                  href="https://fabulousbody.com/course/internationally-accredited-certificate-in-nutrition/"
                  underline="none"
                  sx={{ marginLeft: 0.5, color: "#000" }}
                  target="_blank"
                >
                  FAB Academy
                </Link>
              </Typography>
              <Typography variant="body2">Contact for Appointment</Typography>
              <Typography variant="body2">
                Email: foodnutris@gmail.com
              </Typography>
              <Typography variant="body2">
                <Button
                  size="small"
                  href="https://www.facebook.com/foodnutris"
                  target="_blank"
                  variant="outlined"
                  sx={{ marginTop: 1 }}
                >
                  Facebook
                </Button>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
export default SinglePost;
