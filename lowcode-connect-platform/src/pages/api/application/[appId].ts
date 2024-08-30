import { NextApiRequest, NextApiResponse } from 'next';
import { getApplication, updateApplication, deleteApplication } from '@/services/appication/applicationHandler';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { appId } = req.query;

  try {
    if (req.method === 'GET') {
      const application = await getApplication(appId as string);
      return res.status(200).json(application);
    }

    if (req.method === 'PUT') {
      const updatedApplication = await updateApplication(appId as string, req.body);
      return res.status(200).json(updatedApplication);
    }

    if (req.method === 'DELETE') {
      const deletedApplication = await deleteApplication(appId as string);
      return res.status(200).json(deletedApplication);
    }

    res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
