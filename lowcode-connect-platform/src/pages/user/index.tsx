import Layout from '@/components/Layout';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const UserPage = () => {
  const router = useRouter();


  return (
    <Layout>
      <div style={{ padding: '20px' }}>
        <h1>Welcome to Lowcode Connect Platform</h1>
      </div>
    </Layout>
  );
};

export default UserPage;
