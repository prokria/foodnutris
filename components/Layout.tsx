import { CssBaseline, Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import Footer from "./Footer";

const theme = createTheme();

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <main>{children}</main>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
