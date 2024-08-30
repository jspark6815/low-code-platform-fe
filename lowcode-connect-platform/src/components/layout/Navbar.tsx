import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Icon from '../default/Icon';
import { useAuthStore } from '@/store/authStore';


const Sidebar = styled.nav`
  display: flex;

  width: 250px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  color: #333333;
  border: 1px solid #eeeeee;
  z-index: 9;
`;

const NavHeader = styled.h2`
  display: flex;
  align-self: center;
  align-items: center;
  height: 80px;
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  padding: 20px;

  width: 250px;
  height: 100%;
`;

const SidebarItem = styled.div<{ active?: string }>`
  display: flex;
  align-items: center;

  height: 50px;

  margin-top: 10px;
  padding: 0 10px;
  

  color: #333333;
  text-decoration: none;
  cursor: pointer;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  box-sizing: border-box;
  
  border-radius:8px;

  &:hover {
    background-color: #2682fa;
    color: #eeeeee;
  }

  &[active] {
    background-color: #2682fa;
    color: #eeeeee;
  }
`;

const ItemLabel = styled.span`
  margin-left: 10px;
`;

const LogoutButton = styled.button`
  width: fit-content;
  height: 50px;

  border: none;
  background: none;
  align-self: center;
  margin-top: auto;
  cursor: pointer;
`;

interface NavItem {
  href: string;
  label: string;
  icon: string;
}

const navItems: NavItem[] = [
  { href: '/', label: 'Home', icon: 'house'},
  { href: '/user/access_manage', label: '유저 권한 관리', icon: 'user'},
  { href: '/application', label: '앱 관리', icon: 'application'}
];

const Navbar: React.FC = () => {
  const logout = useAuthStore((state) => state.logout);
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleLogout = () => {
    logout();
    router.push('/login'); // 라우팅을 컴포넌트 내에서 처리
  };
  
  return (
    <Sidebar>
      <NavHeader>Low Code Plaza</NavHeader>
      <NavContainer>
        {navItems.map((item) => (
          <Link href={item.href} passHref key={item.href}>
            <SidebarItem active={router.pathname === item.href ? 'true' : undefined}>
              <Icon name={item.icon} color={router.pathname === item.href ? 'white' : 'black' } />
              <ItemLabel>{item.label}</ItemLabel>
            </SidebarItem>
          </Link>
        ))}
        <LogoutButton onClick={handleLogout}>
          <Icon name={'logout'} size='lg'/>
        </LogoutButton>
      </NavContainer>
    </Sidebar>
  );
};

export default Navbar;
