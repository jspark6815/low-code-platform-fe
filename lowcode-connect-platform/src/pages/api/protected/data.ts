import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { getCookie } from '../../../utils/cookies';

const SECRET_KEY = 'your_secret_key';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = getCookie(req, 'accessToken');

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    return res.status(200).json({ message: 'Protected data', user: decoded });
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}
