import styled from "styled-components";
import Back from "../../assets/Images/backInvert.png";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f2f2f2;
  height: 90vh;
  background-image: url(${Back});
  background-position: center;
  gap: 10px;
  align-items: center;
`;

export const WidgetDIv = styled.div`
  background-color: red;
`;
