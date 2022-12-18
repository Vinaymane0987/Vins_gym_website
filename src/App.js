import React from "react";
import Home from "../src/components/home/Home";
import "./App.css";
import About from "./components/about/About";
import Carrer from "./components/carrier/Carrer";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <Home />
      <About />
      <Carrer />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
