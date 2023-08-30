import { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import About from "./pages/About";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Navbar, Container } from "react-bootstrap";
import { NavbarFixed } from "./components/navbarFixed";

function App() {
  const { innerHeight } = window;

  const getRatio = (el) => innerHeight / (innerHeight + el.offsetHeight);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray("section").forEach((section, i) => {
      section.bg = section.querySelector(".bg");

      gsap.fromTo(
        section.bg,
        {
          backgroundPosition: () =>
            i ? `50% ${-innerHeight * getRatio(section)}px` : "50% 0px",
        },
        {
          backgroundPosition: () =>
            `50% ${innerHeight * (1 - getRatio(section))}px`,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: () => (i ? "top bottom" : "top top"),
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <>
      <Navbar expand="lg">
        <NavbarFixed></NavbarFixed>
      </Navbar>
      <section>
        <Home></Home>
      </section>

      <section href="#Skills">
        <Skills></Skills>
      </section>

      <section>
        <About></About>
      </section>
    </>
  );
}

export default App;
