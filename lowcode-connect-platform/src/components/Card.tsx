import { FC } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

interface CardProps {
  title: string;
  description: string;
  url: string;
}


const CardComponent = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  cursor: pointer;
  height: 200px;
  width: 33%;
  background-color: white;
`

const Card: FC<CardProps> = ({ title, description, url }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(url);
  };

  return (
    <CardComponent
      onClick={handleClick}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </CardComponent>
  );
};

export default Card;
