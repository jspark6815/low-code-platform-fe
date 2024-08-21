import { FC } from 'react';
import { useRouter } from 'next/router';

interface CardProps {
  title: string;
  description: string;
  url: string;
}

const Card: FC<CardProps> = ({ title, description, url }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(url);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        border: '1px solid #ddd',
        padding: '20px',
        borderRadius: '8px',
        cursor: 'pointer',
        width: '200px',
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
