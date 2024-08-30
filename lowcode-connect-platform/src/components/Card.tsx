import { FC } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

interface CardProps {
  title: string;
  description: string;
  url: string;
  latest_at: Date;
  version: number;
}


const CardComponent = styled.div`
  /* border: 1px solid #ddd; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  padding: 25px;
  border-radius: 8px;
  height: 280px;
  width: 22.5%;
  background-color: white;
`;

const VersionButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: black;
  height: 35px;
  width: 35%;
  border-radius: 8px;
  margin-bottom: 20px;
  color: white;
  font-size: 1.2em;
`;

const CardHeader = styled.h3`
  font-size: 2em;
  font-weight: 500;
  margin-bottom: 20px;
`;

const CardDesc = styled.p`
  color: #989898;
`;

const CardlaunchButton = styled.button`
  width: 100%;
  height: 50px;
  margin-top: auto;
  align-self: center;

  border-radius: 8px;
  border: none;
  background-color: #7949FF;
  cursor: pointer;

  color: white;
  font-size: 1.2em;
`; 

const Card: FC<CardProps> = ({ title, description, url, latest_at, version }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(url);
  };

  return (
    <CardComponent>
      <VersionButton>
        {`v${version}.0`}
      </VersionButton>
      <CardHeader>{title}</CardHeader>
      <CardDesc>{description}</CardDesc>
      <CardlaunchButton onClick={handleClick}>
        Launch
      </CardlaunchButton>
    </CardComponent>
  );
};

export default Card;
