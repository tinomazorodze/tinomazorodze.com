import styled from "styled-components";

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  font-size: 16px;
  margin-bottom: 20px;

  th,
  td {
    text-align: left;
    padding: 10px;
  }

  th {
    background-color: teal;
    font-weight: bold;
    color: white;
  }
  border-radius: 5px;

  td {
    border-bottom: 1px solid rgb(243 244 246);
  }
  tr:hover {
    color: teal;
  }
`;
