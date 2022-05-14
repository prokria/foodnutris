import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Layout from "./Components/Layout";
import NoPage from "./Pages/NoPage";
import Category from "./Pages/Category";
import SinglePost from "./Pages/SinglePost";
import TagPosts from "./Pages/TagPosts";
import BmiCalculator from "./Pages/BMI";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="category/:slug" element={<Category />} />
            <Route path="tag/:slug" element={<TagPosts />} />
            <Route path="blog/:slug" element={<SinglePost />} />
            <Route path="bmi-calculator" element={<BmiCalculator />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
