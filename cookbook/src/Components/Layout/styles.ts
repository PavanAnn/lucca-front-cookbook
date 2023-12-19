import styled from 'styled-components';

export const MainLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #DEECFA;
`;

export const Header = styled.header`
  background-color: #84C1FD;
    color: white;
    text-align: center;
    height: 80px;
    display: flex;
    align-content: center;
    justify-content: space-between;
    align-items: center;
`;

export const WebsiteName = styled.div`
  font-size: 1.5rem;
  margin-left: 20px;
  margin-right: 20px;
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


export const Container = styled.div`
  flex: 1;
  display: flex;
  margin: 0 auto;
`;

export const Footer = styled.footer`
  background-color: #84C1FD;
  color: white;
  text-align: center;
  height: 40px;
`;

export const Sidebar = styled.div`
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
  position: absolute;
  margin: 80px 0 40px 0px;
  top: 0;
  left: 0;
  bottom: 0;
`;


export const ContentWrapper = styled.div`
margin-left: 0px;
flex: 1;
`;
