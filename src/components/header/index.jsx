import React from "react";

import gsap from "gsap";

useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);
  const sections = gsap.utils.toArray(".panel");
  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".container",
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
      end: () => "+=" + containerRef.current.offsetWidth,
    },
  });
}, []);

const Header = () => {
  return (
    <>
      <section className="banner">
        <div className="banner-content">
          <h2>Hi, I'm Kennedy</h2>
          <h3>Frontend Developer</h3>
        </div>
      </section>
    </>
  );
};

export default Header;
