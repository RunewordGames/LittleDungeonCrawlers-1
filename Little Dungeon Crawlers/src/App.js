import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import ImageComponent from "./ImageComponent"; // Import the new component

ReactDOM.render(
  <div className="app">
    <Header />
    {/* <ImageComponent /> */}
    <Body />
    <Footer />
  </div>,
  document.getElementById("root")
);
