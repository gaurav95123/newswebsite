import React, { Component } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      language: "hi",
      search: "",
    };
  }
  changeLanguage = (data) => {
    this.setState({ language: data });
  };
  changeSearch = (data) => {
    this.setState({ search: data });
  };
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar
            changeLanguage={this.changeLanguage}
            changeSearch={this.changeSearch}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="All"
                />
              }
            />
            <Route
              path="/Politics"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="Politics"
                />
              }
            />
            <Route
              path="/Crime"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="Crime"
                />
              }
            />
            <Route
              path="/Education"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="Education"
                />
              }
            />
            <Route
              path="/Science"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="Science"
                />
              }
            />
            <Route
              path="/Technoloy"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="Technoloy"
                />
              }
            />
            <Route
              path="/Jokes"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="Jokes"
                />
              }
            />
            <Route
              path="/Game"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="Game"
                />
              }
            />
            <Route
              path="/Cricket"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="Cricket"
                />
              }
            />
            <Route
              path="/Fifa"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="Fifa"
                />
              }
            />
            <Route
              path="/World"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="World"
                />
              }
            />
            <Route
              path="/India"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="India"
                />
              }
            />
            <Route
              path="/Covid"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="Covid"
                />
              }
            />
          </Routes>
        </BrowserRouter>
        <Footer />
      </>
    );
  }
}
