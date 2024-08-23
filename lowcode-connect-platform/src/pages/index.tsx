import { useAuthStore } from '../store/authStore';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Card from '../components/Card';

const MainPage = () => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [isLoggedIn, router]);

  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    router.push('/login'); // 라우팅을 컴포넌트 내에서 처리
  };

  const cardsData = [
    { title: 'Link 1', description: 'This is the first link.', url: '/link1' },
    { title: 'Link 2', description: 'This is the second link.', url: '/link2' },
    { title: 'Link 3', description: 'This is the third link.', url: '/link3' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to Lowcode Connect Platform</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        {cardsData.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} url={card.url} />
        ))}
      </div>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
};

export default MainPage;
