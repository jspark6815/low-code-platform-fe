// import { useAuthStore } from '@/store/authStore';
import { useAuthStore } from '../../store/authStore';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

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
  const logout = useAuthStore((state) => state.logout);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login'); // 라우팅을 컴포넌트 내에서 처리
  };

  return (
    <HeaderContainer>
      <HeaderTitle>Low Code Connect Platform</HeaderTitle>
      <UserMenu>
          <button onClick={handleLogout}>logout</button>
      </UserMenu>
    </HeaderContainer>
  );
};

export default Header;
