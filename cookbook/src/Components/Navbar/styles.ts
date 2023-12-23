import styled from "styled-components";

export const Header = styled.header`
  background-color: #84C1FD;
  color: white;
  text-align: center;
  height: 80px;
  display: flex;
  align-content: flex-start;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
`;

export const SearchBar = styled.div`
  margin-left: auto;
  margin-right: auto;
  flex: 1;
  height: 50%;

    input{
        border-radius: 16px;
        width: 70%;
        height: 90%;
        font-size: 32px;
    }
`;

export const WebsiteName = styled.div`
  font-size: 1.5rem;
  margin-left: 20px;
  margin-right: 0px;
  cursor: pointer;
  border: 1px solid red;
`;
