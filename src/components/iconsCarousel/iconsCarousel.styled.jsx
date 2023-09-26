import styled from "styled-components";

const CarouselItens = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 20px;
  width: 70%;
  flex-wrap: wrap;

  @media screen and (max-width: 740px) {
    font-size: 10px;
    height: auto;
  }
`;

const CarouselItemImage = styled.img`
  width: 33.3%;
  flex: 0 0 calc(33.33% - 10px);
  object-fit: contain;
  cursor: pointer;
`;

const Img = styled.div`
  width: 33.3%;
  flex: 0 0 calc(33.33% - 10px);
  object-fit: contain;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &:hover {
    transform: scale(1.1);
    transition: 0.3s ease-in-out;
  }
`;

const ImgDescription = styled.div`
  margin-top: 10px;
  align-items: end;
  display: flex;
  color: #121212;
  font-family: "Euclid-circular", sans-serif;
  font-weight: bold;

  @media screen and (max-width: 740px) {
    font-size: 10px;
  }
`;

export { CarouselItens, CarouselItemImage, Img, ImgDescription };
