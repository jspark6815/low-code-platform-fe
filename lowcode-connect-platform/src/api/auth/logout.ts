// src/api/auth/logout.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { deleteCookie } from '../../utils/cookies';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  deleteCookie(res, 'accessToken');
  deleteCookie(res, 'refreshToken');
  return res.status(200).json({ message: 'Logged out successfully' });
}
