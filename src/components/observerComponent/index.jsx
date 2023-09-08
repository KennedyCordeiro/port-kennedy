import React, { useEffect } from "react";
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
      // Limpar o observador quando o componente for desmontado
      hiddenElements.forEach((element) => observer.unobserve(element));
    };
  }, []); // O array vazio [] garante que isso seja executado apenas uma vez no montagem do componente.

  return <div className="hidden">{/* Conteúdo do componente */}</div>;
};

export default ObserverComponent;
