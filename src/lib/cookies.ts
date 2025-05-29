import { getCookie, setCookie } from 'cookies-next';

export const setAuthCookie = (token: string, name: string, maxAge: number = 60) => {
  const toBase64 = Buffer.from(token).toString('base64');

  setCookie(name, toBase64, {
    maxAge,
    path: '/',
    // more security options here
    // sameSite: 'strict',
    //httpOnly: true,
    // secure: process.env.NODE_ENV === 'production',
  });
};

export const getAuthCookie = (name: string) => {
  const cookie = getCookie(name);

  if (!cookie || typeof cookie !== 'string') return undefined;

  return Buffer.from(cookie, 'base64').toString('utf-8');
};

export const getValidAuthTokens = () => {
  const access_token = getAuthCookie('auth_token');
  const refresh_token = getAuthCookie('refresh_token');
  
  return access_token ? access_token : refresh_token;
};