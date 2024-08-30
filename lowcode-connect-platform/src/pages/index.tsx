import { useAuthStore } from '../store/authStore';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Card from '../components/Card';
import Layout from '@/components/Layout';
import styled from 'styled-components';
import handler from './api/application';
import { GetServerSideProps, NextApiRequest, NextApiResponse } from 'next';

interface Application {
  app_id: string,
  app_name: string,
  url: string,
  app_desc: string,
  created_by: string,
  created_at: Date,
  updated_by: string,
  updated_at: Date,
  version: number
}

interface MainPageProps {
  applications: Application[];
}

const MainPage = ({ applications }: MainPageProps) => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [isLoggedIn, router]);

  console.log(applications);

  const CardContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    gap: 20px 2%;
    flex-wrap: wrap;
  `;

  return (
    <Layout>
      <div style={{ padding: '20px' }}>
        <CardContainer>
          {applications.map((app) => (
            <Card key={app.app_id} version={app.version} title={app.app_name} description={app.app_desc} url={app.url} />
          ))}
        </CardContainer>
      </div>
    </Layout>
  );
};

export default MainPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(`${process.env.FRONT_API_BASE_URL}/application`);
  const applications = await response.json();

  return {
    props: {
      applications,
    },
  };
};