import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = styled.nav`
  width: 250px;
  background-color: #3e8df7;
  padding: 20px;
  display: flex;
  flex-direction: column;
  color: #ffffff;
`;

const SidebarItem = styled.a<{ $active?: boolean }>`
  padding: 10px 0;
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
  font-weight: ${({ $active }) => ($active ? 'bold' : 'normal')};
  text-decoration: ${({ $active }) => ($active ? 'underline' : 'none')};
  
  &:hover {
    text-decoration: underline;
  }
`;

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/user', label: '유저 권한 관리'}
];

const Navbar: React.FC = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  
  return (
    <Sidebar>
      <h2>Shinhan Bank</h2>
      {navItems.map((item) => (
        <Link href={item.href} passHref key={item.href}>
          <SidebarItem $active={router.pathname === item.href}>
            {item.label}
          </SidebarItem>
        </Link>
      ))}
    </Sidebar>
  );
};

export default Navbar;
