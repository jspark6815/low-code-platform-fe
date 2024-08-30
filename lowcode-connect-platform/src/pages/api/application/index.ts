import { NextApiRequest, NextApiResponse } from 'next';
import { getApplications, createApplication } from '@/services/appication/applicationHandler';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      const { skip = '0', limit = '30' } = req.query;
      const applications = await getApplications(parseInt(skip as string, 10), parseInt(limit as string, 10));

      res.setHeader('Content-Type', 'application/json');
      return res.status(200).json(applications);
    }

    if (req.method === 'POST') {
      const newApplication = await createApplication(req.body);

      return res.status(201).json(newApplication);
    }

    // 허용되지 않은 메서드 처리
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
