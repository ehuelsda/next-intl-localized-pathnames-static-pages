import createMiddleware from 'next-intl/middleware';
import {locales, localePrefix, defaultLocale, pathnames} from './navigation';

export default createMiddleware({
  defaultLocale,
  locales,
  localePrefix,
  pathnames
});

export const config = {
	matcher: ['/((?!api|_next|_vercel|admin|.*\\..*).*)']
};
