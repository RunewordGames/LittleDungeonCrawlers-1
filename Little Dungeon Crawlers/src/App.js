import React from "react";
import "./App.css";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import ImageComponent from "./ImageComponent"; // Import the new component

function App() {
  return (
    <div className="app">
      <Header />
      {/* <ImageComponent /> */}
      <Body />
      <Footer />
    </div>
  );
}

export default App;
