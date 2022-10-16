import React from "react";
import { CssBaseline, Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const theme = createTheme();
type LayoutPropsType = {
  children: React.ReactNode;
};
const Layout = ({ children }: LayoutPropsType) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <meta charSet="utf-8" />
          <title>FoodNutris | Food and Nutrition Science</title>
          <link rel="icon" href="favicon.ico" />
          <meta
            name="description"
            content="FoodNutris | Food and Nutrition Science"
          />
        </Head>
        <CssBaseline />
        <Container maxWidth="lg">
          <Header />
          <main>{children}</main>
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
