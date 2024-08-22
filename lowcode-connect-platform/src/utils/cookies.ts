// src/utils/cookies.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { serialize, parse } from 'cookie';

export function setCookie(res: NextApiResponse, name: string, value: string, options: any = {}) {
  const stringValue = typeof value === 'object' ? JSON.stringify(value) : String(value);

  if ('maxAge' in options) {
    options.expires = new Date(Date.now() + options.maxAge * 1000);
  }

  res.setHeader('Set-Cookie', serialize(name, stringValue, options));
}

export function getCookie(req: NextApiRequest, name: string) {
  const cookies = parse(req.headers.cookie || '');
  return cookies[name];
}

export function deleteCookie(res: NextApiResponse, name: string) {
  setCookie(res, name, '', { maxAge: -1 });
}
