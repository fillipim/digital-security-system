import styled from "styled-components";
import theme from "../../styles/theme";

export const Form = styled.form`
  width: 600px;
  input {
    margin: .5rem 0;
  }
  h2 {
    margin-bottom: 1rem;
    color: #00b679;
  }
  span{
    color: red;
  }
`;

export const BoxButtons = styled.div<{content: string}>`
  width: 100%;
  display: flex;
  justify-content: ${({content}) => content};
  margin-bottom: 1rem;
  button{
    margin: 0 1rem;
    padding: .5rem;
    background-color: ${({theme}) => theme.colors.brand[200]};
    border-radius: 8px;
    color: ${({theme}) => theme.colors.grey.grey0};
  }
`
