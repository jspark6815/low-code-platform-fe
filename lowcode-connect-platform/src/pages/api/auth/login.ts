import type { NextApiRequest, NextApiResponse } from 'next';
import { loginHandler } from '../../../api/auth/loginHandler';
import { setCookie } from '../../../utils/cookies';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { email, password } = req.body;

    const { accessToken, refreshToken } = loginHandler(email, password);

    setCookie(res, 'accessToken', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 15 * 60, // 15 minutes
      path: '/',
    });

    setCookie(res, 'refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 7 * 24 * 60 * 60, // 7 days
      path: '/',
    });

    res.status(200).json({
      message: 'Login successful',
      data: {
        accessToken: accessToken,
        refreshToken: refreshToken,
      }
    });
  } catch (error) {

    let message;
    if (error instanceof Error) message = error.message;
    else message = String(error);

    res.status(401).json({ message: message });
  }
}
