import { useAuthStore } from '../store/authStore';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Card from '../components/Card';
import Layout from '@/components/Layout';
import styled from 'styled-components';

const MainPage = () => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [isLoggedIn, router]);


  const cardsData = [
    { title: 'Link 1', description: 'This is the first link.', url: '/link1' },
    { title: 'Link 2', description: 'This is the second link.', url: '/link2' },
    { title: 'Link 3', description: 'This is the third link.', url: '/link3' },
    { title: 'Link 4', description: 'This is the 4th link.', url: '/link3' },
    { title: 'Link 5', description: 'This is the 5th link.', url: '/link3' },
  ];

  const CardContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    gap: 20px 5%;
    flex-wrap: wrap;
  `;

  return (
    <Layout>
      <div style={{ padding: '20px' }}>
        <CardContainer>
          {cardsData.map((card, index) => (
            <Card key={index} title={card.title} description={card.description} url={card.url} />
          ))}
        </CardContainer>
      </div>
    </Layout>
  );
};

export default MainPage;
