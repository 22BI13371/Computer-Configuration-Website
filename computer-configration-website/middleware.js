import NextAuth from 'next-auth';
// import { authConfig } from './auth.config';
import { authConfig } from '@/lib/auth.config';

export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/testing/', '/admin/:path*', '/api/admin/:path*'],
};
