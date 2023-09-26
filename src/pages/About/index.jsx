import React from "react";
import * as C from "./About.styled";
import Widgets from "../../components/widgets";

const About = () => {
  return (
    <C.Container>
      <C.DivTitle>
        <C.Title>About</C.Title>
      </C.DivTitle>
      <Widgets></Widgets>
    </C.Container>
  );
};

export default About;
