import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ProfileButtonContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const ProfileImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #737381;
  cursor: pointer;
`;

const DropdownMenu = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  top: 50px;
  right: 0;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 150px;
  z-index: 1000;
`;

const DropdownItem = styled.a`
  padding: 10px 15px;
  display: block;
  cursor: pointer;
  text-decoration: none;
  color: #333;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const ProfileButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const userProfile = {
    user_name: 'admin',
    user_id: '00000000'
  }

  return (
    <ProfileButtonContainer>
      <ProfileImage
        onClick={toggleDropdown}
      />
      <DropdownMenu isOpen={isOpen}>
        <DropdownItem>{`${userProfile.user_name}(${userProfile.user_id})`}</DropdownItem>
       </DropdownMenu>
    </ProfileButtonContainer>
  );
};

export default ProfileButton;
