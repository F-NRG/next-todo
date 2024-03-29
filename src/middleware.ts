import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: ['/api'],
});

export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/auth-middleware
  // for more information about configuring your Middleware
  publicRoutes: ['/api/*'],
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
