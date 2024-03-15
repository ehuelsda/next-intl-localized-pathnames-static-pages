import {createLocalizedPathnamesNavigation} from 'next-intl/navigation';

export const locales = ['en', "no"] as const;

export const defaultLocale = 'en' as const;

// Use the default: `always`
export const localePrefix = "as-needed";

export const pathnames = {
  "/":"/",
  "/articles": {
    "en": "/articles",
    "no": "/artikler"
  }
}

export const {Link, redirect, usePathname, useRouter} =
createLocalizedPathnamesNavigation({
    locales,
    localePrefix,
    pathnames
  });
