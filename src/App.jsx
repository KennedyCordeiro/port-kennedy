import { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import About from "./pages/About";
import NavbarFixed from "./components/navbarFixed";
import Contact from "./pages/Contact";
import ObserverComponent from "./components/observerComponent";
import MidSection from "./pages/MidSection";
function App() {
  return (
    <>
      <NavbarFixed />
      <ObserverComponent />
      <section id="Home" className="hidden">
        <Home />
      </section>
      <section id="MidSection" className="hidden">
        <MidSection />
      </section>
      <section id="Skills" className="hidden">
        <Skills />
      </section>
      <section id="About" className="hidden">
        <About />
      </section>
      <section id="Contact" className="hidden">
        <Contact></Contact>
      </section>
    </>
  );
}

export default App;
