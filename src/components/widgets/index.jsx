import { useState } from "react";
import "./styles.css";

const menuHeight = getComputedStyle(document.documentElement).getPropertyValue(
  "--menu-height"
);

const buttons = ["Quem sou?", "Educação", "Front-End", "Experiências"];
const textItens = [
  { title: "Quem sou?", Text: "O rei do sexo" }, //redux.js.org/" },
  { title: "Educação", Text: "Formado na universidade do sexo" }, //redux.js.org/" },
  {
    title: "Atuação no mercado",
    Text: "Atuei em todos os cabarés possiveis e imaginaveis",
  }, //redux.js.org/" },
  {
    title: "Front end",
    Text: "Estou plenamente de minhas habilidadades no front end da putaria e de suas áreas de interesse",
  }, //redux.js.org/" },
];
const Widgets = () => {
  const [activeBlock, setActiveBlock] = useState(0);

  const toggleMenuBlock = (index) => {
    setActiveBlock(index);
  };

  return (
    <article className="card">
      <div className="buttons">
        {buttons.map((button, index) => (
          <button
            key={index}
            className={index === activeBlock ? "active" : ""}
            onClick={() => toggleMenuBlock(index)}
          >
            {button}
          </button>
        ))}
      </div>
      <div className="wrapper">
        <div
          className="content"
          style={{ translate: `0 calc(0px - ${menuHeight} * ${activeBlock})` }}
        >
          <div className="block">
            <h2>Quem sou?</h2>
            <p>
              Vivamus volutpat ipsum ac ipsum feugiat, vel molestie elit
              vestibulum. Donec luctus commodo dictum. Aenean in turpis erat.
              Vestibulum imperdiet nibh. Ipsum ac ipsum feugiat, vel molestie.
            </p>
          </div>
          <div className="block">
            <h2>Educação</h2>
            <p>
              Vivamus volutpat ipsum ac ipsum feugiat, vel molestie elit
              vestibulum. Donec luctus commodo dictum. Aenean in turpis erat.
              Vestibulum imperdiet nibh. Ipsum ac ipsum feugiat, vel molestie.
            </p>
          </div>
          <div className="block">
            <h2>Front-End</h2>
            <p>
              Vivamus volutpat ipsum ac ipsum feugiat, vel molestie elit
              vestibulum. Donec luctus commodo dictum. Aenean in turpis erat.
              Vestibulum imperdiet nibh. Ipsum ac ipsum feugiat, vel molestie.
            </p>
          </div>
          <div className="block">
            <h2>Experiências</h2>
            <p>
              Vivamus volutpat ipsum ac ipsum feugiat, vel molestie elit
              vestibulum. Donec luctus commodo dictum. Aenean in turpis erat.
              Vestibulum imperdiet nibh. Ipsum ac ipsum feugiat, vel molestie.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Widgets;
