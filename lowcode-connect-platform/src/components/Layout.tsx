import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Header from './layout/Header';
import Navbar from './layout/Navbar';

interface LayoutProps {
  children: ReactNode;
}

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const ContentContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Content = styled.main`
  flex-grow: 1;
  padding: 20px;
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Navbar />
      <ContentContainer>
        <Header />
        <Content>
          {children}
        </Content>
      </ContentContainer>
    </LayoutContainer>
  );
};

export default Layout;
