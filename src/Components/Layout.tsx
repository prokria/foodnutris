import { Outlet } from "react-router-dom";
import { CssBaseline, Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const theme = createTheme();

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <main>
          <Outlet />
        </main>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
