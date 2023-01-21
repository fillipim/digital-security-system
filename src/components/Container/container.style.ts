import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.grey.grey1};
  padding: 1rem;
  h2 {
    width: 100%;
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.grey.grey1};
    color: ${({ theme }) => theme.colors.grey.grey3};
    margin-bottom: 1rem;
  }
  h3 {
    color: ${({ theme }) => theme.colors.brand[200]};
  }
`;

export const FieldBox = styled.div`
  position: relative;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.grey.grey3};
  margin-bottom: 1rem;
  h3 {
    margin-bottom: 1rem;
    position: absolute;
    background-color: #fff;
    padding: 0 5px;
    top: -9px;
    left: 12px;
  }
`;
