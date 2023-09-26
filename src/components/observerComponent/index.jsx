import { useEffect } from "react";
import "./styles.css";
const ObserverComponent = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((element) => observer.observe(element));

    return () => {
      hiddenElements.forEach((element) => observer.unobserve(element));
    };
  }, []);
  return <div className="hidden">{/* Conteúdo do componente */}</div>;
};

export default ObserverComponent;
