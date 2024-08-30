import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your_secret_key';
const REFRESH_SECRET_KEY = 'your_refresh_secret_key';

export function loginHandler(email: string, password: string) {
  if (email === 'test@example.com' && password === 'password') {
    const accessToken = jwt.sign({ email }, SECRET_KEY, { expiresIn: '15m' });
    const refreshToken = jwt.sign({ email }, REFRESH_SECRET_KEY, { expiresIn: '7d' });
    
    return { accessToken, refreshToken };
  }
  
  throw new Error('Invalid credentials');
}
