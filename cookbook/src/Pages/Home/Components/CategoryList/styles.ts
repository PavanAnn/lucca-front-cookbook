import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: 90%;
  background-color: #f7f7f7; /* Background color */
  border-radius: 10px; /* Border radius for rounded corners */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Box shadow for a subtle lift effect */
`;

export const CategoryColumn = styled.div`
    flex: 1;
    margin-right: 20px;
    margin: 0 auto;
`;

export const CategoryTitle = styled.h2`
    text-align: center;
    font-size: 1.5em;
    margin-bottom: 10px;
    color: #333;
`;

export const ItemList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 0 0 20px;
`;

export const Item = styled.li`
  font-size: 1.2em;
  margin-bottom: 8px;
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s ease;
  &:hover {
    color: #0056b3;
    text-decoration: none;
    cursor: pointer;
  }
`;