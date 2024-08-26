import theme from "@/styles/theme";
import { IconType } from "react-icons";
import { FaHouse, FaUser } from "react-icons/fa6";
import styled from "styled-components";

const baseStyle = `
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const iconSizes = {
  lg: {
    width: '24px',
    height: '24px',
  },
  md: {
    width: '20px',
    height: '20px',
  },
  sm: {
    width: '16px',
    height: '16px',
  },
};

type IconProps = {
  name: string;
  size?: 'lg' | 'md' | 'sm';
  color?: string;
} 

const iconNameSpace: Record<string, IconType> = {
  house: FaHouse,
  user: FaUser,
};

const StyledIcon = styled.span<{ size: 'lg' | 'md' | 'sm', color: string }>`
  ${baseStyle}

  svg {
    width: ${(props) => iconSizes[props.size].width};
    height: ${(props) => iconSizes[props.size].height};
    color: ${(props) => props.theme.colors[props.color]};
  }
`;

const Icon: React.FC<IconProps> = ({ name, size = 'md', color = 'black' }) => {
  const IconComponent = iconNameSpace[name];

  if (!IconComponent) {
    console.error(`Icon with name "${name}" does not exist in iconNameSpace.`);
    return null;
  }

  return (
    <StyledIcon size={size} color={color}>
      <IconComponent />
    </StyledIcon>
  );
};

export default Icon;
