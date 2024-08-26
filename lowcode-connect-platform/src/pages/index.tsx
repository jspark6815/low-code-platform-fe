import { useAuthStore } from '../store/authStore';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Card from '../components/Card';
import Layout from '@/components/Layout';

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
  ];

  return (
    <Layout>
      <div style={{ padding: '20px' }}>
        <div style={{ display: 'flex', gap: '20px' }}>
          {cardsData.map((card, index) => (
            <Card key={index} title={card.title} description={card.description} url={card.url} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default MainPage;
