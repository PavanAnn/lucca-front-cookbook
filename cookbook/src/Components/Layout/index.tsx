import React, { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { MainLayoutContainer, Header, Container, Footer, Sidebar, ContentWrapper, SearchBar, WebsiteName } from './styles';


const MainLayout = () => {
    return (
        <MainLayoutContainer>
            <Header>
                <WebsiteName>Your Website</WebsiteName>
                <SearchBar>
                    <input type="text" placeholder="Search..." />
                </SearchBar>
            </Header>
            <Container>
                <Sidebar>
                    aaa
                </Sidebar>
                <ContentWrapper>
                <Outlet />

                </ContentWrapper>
            </Container>
            <Footer>
                <p>&copy; 2023 Your Website</p>
            </Footer>
      </MainLayoutContainer>
  );
};

export default MainLayout;
