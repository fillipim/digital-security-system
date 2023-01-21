import styled from "styled-components";


export const Box = styled.div`
  width: 600px;
  input {
    margin: .5rem 0;
  }
  h2 {
    margin-bottom: 1rem;
    color: #00b679;
    width: 100%;
  }
  span{
    color: red;
  }
  select{
    display: block;
    padding:  .5rem;
    background-color: ${({theme}) => theme.colors.grey.grey0};
    border: 1.2px solid ${({theme}) => theme.colors.grey.grey2};
    border-radius: 4px;
    margin: .5rem 0;
  }
  textarea{
    background-color: ${({theme}) => theme.colors.grey.grey0};
    display: block;
    width: 100%;
    resize: none;
  }
`;

export const TextAreaLabel = styled.label`
    width: 50%;
    display: block;
`