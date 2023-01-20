import styled from "styled-components";

export const Table = styled.table`
    border-collapse: collapse;
    margin: 1rem auto;
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