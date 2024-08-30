import Layout from '@/components/Layout';
import { useRouter } from 'next/router';

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
