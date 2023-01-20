import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    border: none;
    outline: none;
    font-family: 'Inter', sans-serif;
    text-decoration: none;
}
button{
  cursor: pointer;
}

`;
