import { useEffect } from "react";
import "./ObserverItens.css";

const ObserverItens = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("icon-show");
        } else {
          entry.target.classList.remove("icon-show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".icon-hidden");
    hiddenElements.forEach((element) => observer.observe(element));

    return () => {
      hiddenElements.forEach((element) => observer.unobserve(element));
    };
  }, []);
  return <div className="icon-hidden">{/* Conteúdo do componente */}</div>;
};

export default ObserverItens;
