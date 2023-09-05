import { useState } from "react";
import "./styles.css";

const textItems = [
  { title: "Quem sou?", text: "O rei do sexo" },
  { title: "Educação", text: "Formado na universidade do sexo" },
  {
    title: "Mercado",
    text: "Atuei em todos os cabarés possíveis e imagináveis",
  },
  {
    title: "Front end",
    text: "Estou plenamente de minhas habilidades no front end da putaria e de suas áreas de interesse",
  },
];

const Widgets = () => {
  const [activeBlock, setActiveBlock] = useState(0);

  const toggleMenuBlock = (index) => {
    setActiveBlock(index);
  };

  return (
    <article className="card">
      <div className="buttons">
        {textItems.map((text, index) => (
          <button
            key={text.title} // Use o título como a chave única
            className={index === activeBlock ? "active" : ""}
            onClick={() => toggleMenuBlock(index)}
          >
            {text.title}
          </button>
        ))}
      </div>
      <div className="wrapper">
        <div>
          {textItems.map(
            (text, index) =>
              activeBlock === index && <h1 key={text.title}>{text.text}</h1>
          )}
        </div>
      </div>
    </article>
  );
};

export default Widgets;
