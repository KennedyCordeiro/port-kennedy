import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 18rem;
  font-family: Raleway, sans-serif;
  background-color: #282b3cff;
  color: #d7d7d7ff;
  flex-direction: column;

  @media screen and (max-width: 900px) {
    height: auto;
    gap: 10px;
  }
`;

export const Title = styled.h2`
  font-weight: bold;
  padding: 20px 0 0 100px;
  margin: 0;
  font-size: 30px;

  @media screen and (max-width: 900px) {
    padding: 20px 0 0 20px;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.1rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  font-weight: normal;
  flex-wrap: wrap;
  padding: 5px 12.5rem 0 6.25rem;

  @media screen and (max-width: 900px) {
    padding: 5px 1rem 0 1.25rem;
  }
`;

export const DivButton = styled.div`
  padding: 20px 20px 0 6.25rem;

  @media screen and (max-width: 900px) {
    padding: 5px 1rem 2rem 1.25rem;
  }
`;
