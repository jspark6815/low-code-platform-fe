import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { getCookie, setCookie } from '../../../utils/cookies';

const SECRET_KEY = 'low_code_platform_secret';
const REFRESH_SECRET_KEY = 'low_code_platform_secret_refresh';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const refreshToken = getCookie(req, 'refreshToken');

  if (!refreshToken) {
    return res.status(401).json({ message: 'No refresh token provided' });
  }

  try {
    const decoded = jwt.verify(refreshToken, REFRESH_SECRET_KEY) as jwt.JwtPayload;

    const newAccessToken = jwt.sign({ email: decoded.email }, SECRET_KEY, { expiresIn: '15m' });

    setCookie(res, 'accessToken', newAccessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 15 * 60, // 15 minutes
      path: '/',
    });

    return res.status(200).json({ message: 'Token refreshed' });
  } catch (err) {
    return res.status(401).json({ message: 'Invalid refresh token' });
  }
}
