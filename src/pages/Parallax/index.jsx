import React, { useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
  overflow-x: hidden;
  color: black;
  position: relative; /* Adicione position relative */
`;
const Title = styled.h2`
  color: #2d2d2d;
  font-size: 30px;
  font-weight: bold;
`;
const Section = styled.section`
  display: flex;
  flex-wrap: nowrap;
  width: 200%;
  height: 100vh;
  padding: 0 80px;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.background || "#fff"};
`;

const ParallaxSection = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".panel");
    const container = document.querySelector(".container");

    // Atualize o tamanho do contêiner para acomodar todas as seções
    gsap.set(container, { width: container.scrollWidth });

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container, // Use o contêiner como gatilho
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => `+=${container.offsetWidth}`,
      },
    });
  }, []);

  return (
    <Container className="container">
      {" "}
      {/* Adicione uma classe container */}
      <Section background="#ccb7ff">
        <div>
          <Title>Welcome</Title>
          <Title>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </Title>
        </div>
        <img src="1.svg" alt="1" />
      </Section>
      <Section>
        <img src="2.svg" alt="2" />
        <Title>About Us</Title>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi labore
          eius cum perferendis consectetur culpa laboriosam quam, sed ea nihil,
          suscipit, quidem est expedita. Nihil enim obcaecati deleniti eaque
          sed.
        </p>
      </Section>
      <Section background="#ffffff">
        <img src="5.svg" alt="5" />
        <h2>Services</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi labore
          eius cum perferendis consectetur culpa laboriosam quam, sed ea nihil,
          suscipit, quidem est expedita. Nihil enim obcaecati deleniti eaque
          sed.
        </p>
      </Section>
    </Container>
  );
};

export default ParallaxSection;
