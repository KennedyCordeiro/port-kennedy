import {
  CarouselItens,
  CarouselItemImage,
  Img,
  ImgDescription,
} from "./iconsCarousel.styled";
import icon1 from "../../../public/Images/icon1.svg";
import icon2 from "../../../public/Images/icon2.svg";
import icon3 from "../../../public/Images/icon3.svg";
import icon4 from "../../../public/Images/icon4.svg";
import icon5 from "../../../public/Images/icon5.svg";
import icon6 from "../../../public/Images/icon6.svg";
import icon7 from "../../../public/Images/iconBootstrap.svg";
import icon8 from "../../../public/Images/iconsGit.svg";
import icon9 from "../../../public/Images/iconHtml.svg";
import icon10 from "../../../public/Images/iconSass.svg";
import icon11 from "../../../public/Images/iconTypescript.svg";
import icon12 from "../../../public/Images/iconNode.svg";

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
    { image: icon5, alt: "React-JS", url: "https://reactjs.org" },
    { image: icon4, alt: "Github", url: "https://github.com/kennedyCordeiro" },
    {
      image: icon6,
      alt: ".Net Framework",
      url: "https://dotnet.microsoft.com/pt-br/",
    },
    { image: icon7, alt: "Bootstrap", url: "https://getbootstrap.com/" },
    { image: icon8, alt: "Git", url: "https://git-scm.com/" },
    {
      image: icon9,
      alt: "HTML5",
      url: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
    },
    { image: icon10, alt: "Sass", url: "https://sass-lang.com/" },
    { image: icon12, alt: "Node", url: "https://nodejs.org/" },
    {
      image: icon11,
      alt: "Typescript",
      url: "https://www.typescriptlang.org/",
    },
  ];

  return (
    <CarouselItens>
      {carouselItems.map((item, index) => (
        <Img key={index} onClick={() => onClickImage(item.url)}>
          <CarouselItemImage src={item.image} alt={item.alt} />
          <ImgDescription>
            <span>{item.alt}</span>
          </ImgDescription>
        </Img>
      ))}
    </CarouselItens>
  );
};

export default IconsCarousel;
