import styled from "styled-components";

export const Main = styled.main`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Table = styled.table`
  width: 600px;
  border-collapse: collapse;
  th {
    background-color: ${({ theme }) => theme.colors.brand[200]};
    padding: 0.5rem;
  }
  td {
    padding: 0.5rem;
  }
  tr {
    border: 1px solid ${({ theme }) => theme.colors.grey.grey4};
  }
  td:nth-child(n + 2),
  th:nth-child(n + 2) {
    text-align: center;
  }
  td:nth-child(1),
  th:nth-child(1) {
    width: 30%;
  }
  td:nth-child(2),
  th:nth-child(2) {
    width: 15%;
  }
  td:nth-child(4),
  th:nth-child(4) {
    width: 10%;
  }
  td:nth-child(5),
  th:nth-child(5) {
    width: 10%;
  }
`;
