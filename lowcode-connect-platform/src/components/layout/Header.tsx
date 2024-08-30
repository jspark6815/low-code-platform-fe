import React from 'react';
import styled from 'styled-components';
import ProfileButton from './ProfileButton';

const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 3;
`;

const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 1.2rem;
`;

const UserMenu = styled.div`
`;

const Header = () => {

  return (
    <HeaderContainer>
      <HeaderTitle>Low Code Connect Platform</HeaderTitle>
      <UserMenu>
        <ProfileButton />
      </UserMenu>
    </HeaderContainer>
  );
};

export default Header;
