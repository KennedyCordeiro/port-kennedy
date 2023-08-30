import { useState } from "react";
import "./styles.css";

const textItens = [
  { title: "Quem sou?", text: "O rei do sexo" }, //redux.js.org/" },
  { title: "Educação", text: "Formado na universidade do sexo" }, //redux.js.org/" },
  {
    title: "Mercado",
    text: "Atuei em todos os cabarés possiveis e imaginaveis",
  }, //redux.js.org/" },
  {
    title: "Front end",
    text: "Estou plenamente de minhas habilidadades no front end da putaria e de suas áreas de interesse",
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
        {textItens.map((text, index) => (
          <button
            key={index}
            className={index === activeBlock ? "active" : ""}
            onClick={() => toggleMenuBlock(index)}
          >
            {text.title}
          </button>
        ))}
      </div>
      <div className="wrapper">
        <div>
          {textItens.map(
            (text, index) => activeBlock === index && <h1>text</h1>
          )}
        </div>
      </div>
    </article>
  );
};

export default Widgets;
