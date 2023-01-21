import styled from "styled-components";

export const BoxButtons = styled.div<{content: string}>`
  width: 100%;
  display: flex;
  justify-content: ${({content}) => content};
  margin-bottom: 1rem;
  border: none;
  gap: 1rem;
  button{
    padding: .5rem;
    background-color: ${({theme}) => theme.colors.brand[200]};
    border-radius: 8px;
    color: ${({theme}) => theme.colors.grey.grey0};
  }
`
