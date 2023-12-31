import React, { useState } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";

export default function App() {
  var [language, setlanguage] = useState("hi");
  var [search, setsearch] = useState("");

  const changeLanguage = (data) => {
    setlanguage(data);
  };
  const changeSearch = (data) => {
    setsearch(data);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar changeLanguage={changeLanguage} changeSearch={changeSearch} />
        <Routes>
          <Route
            path="/"
            element={<Home search={search} language={language} q="All" />}
          />
          <Route
            path="/Politics"
            element={<Home search={search} language={language} q="Politics" />}
          />
          <Route
            path="/Crime"
            element={<Home search={search} language={language} q="Crime" />}
          />
          <Route
            path="/Education"
            element={<Home search={search} language={language} q="Education" />}
          />
          <Route
            path="/Science"
            element={<Home search={search} language={language} q="Science" />}
          />
          <Route
            path="/Technoloy"
            element={<Home search={search} language={language} q="Technoloy" />}
          />
          <Route
            path="/Jokes"
            element={<Home search={search} language={language} q="Jokes" />}
          />
          <Route
            path="/Game"
            element={<Home search={search} language={language} q="Game" />}
          />
          <Route
            path="/Cricket"
            element={<Home search={search} language={language} q="Cricket" />}
          />
          <Route
            path="/Fifa"
            element={<Home search={search} language={language} q="Fifa" />}
          />
          <Route
            path="/World"
            element={<Home search={search} language={language} q="World" />}
          />
          <Route
            path="/India"
            element={<Home search={search} language={language} q="India" />}
          />
          <Route
            path="/Covid"
            element={<Home search={search} language={language} q="Covid" />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
