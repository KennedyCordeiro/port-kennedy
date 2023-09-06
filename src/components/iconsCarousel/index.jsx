import { Carousel } from "react-responsive-carousel";
import icon1 from "../../assets/Images/icon1.svg";
import icon2 from "../../assets/Images/icon2.svg";
import icon3 from "../../assets/Images/icon3.svg";
import icon4 from "../../assets/Images/icon4.svg";
import icon5 from "../../assets/Images/icon5.svg";
import "./styles.css";

const IconsCarousel = () => {
  const onClickImage = (url) => {
    window.open(url, "blank");
  };

  const carouselItems = [
    { image: icon1, alt: "Redux", url: "https://redux.js.org/" },
    { image: icon2, alt: "Azure", url: "https://azure.microsoft.com/pt-br/" },
    {
      image: icon3,
      alt: "JavaScript",
      url: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
    },
    { image: icon4, alt: "Github", url: "https://github.com/kennedyCordeiro" },
    { image: icon5, alt: "React-JS", url: "https://reactjs.org" },
  ];

  return (
    <div className="carousel-itens">
      {carouselItems.map((item, index) => (
        <div key={index} className="img" onClick={() => onClickImage(item.url)}>
          <img src={item.image} alt={item.alt} />
        </div>
      ))}
    </div>
  );
};

export default IconsCarousel;
