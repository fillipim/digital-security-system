import styled from "styled-components";
import theme from "../../styles/theme";

export const ButtonList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ButtonsBox = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    width: 10%;
  }
`;
export const ButtonPage = styled.li<{ current: boolean }>`
  width: 10%;
  button {
    width: 100%;
    padding: 10px;
    background-color: ${({ current, theme }) =>
      current ? theme.colors.brand[200] : theme.colors.grey.grey0};
  }
`;
