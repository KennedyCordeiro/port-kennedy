import { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import About from "./pages/About";
import NavbarFixed from "./components/navbarFixed";

function App() {
  return (
    <>
      <NavbarFixed></NavbarFixed>
      <section id="Home">
        <Home></Home>
      </section>

      <section id="Skills">
        <Skills></Skills>
      </section>

      <section id="About">
        <About></About>
      </section>

      <section id="Contact"></section>
    </>
  );
}

export default App;
