import {ReactNode} from 'react';

type Props = {
  children: ReactNode;
  params: {locale: string};
};

export async function generateStaticParams() {
	return [{locale: "no"}, {locale: "en"}]
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: Props) {
  return (
    <html lang={locale}>
      <head>
        <title>next-intl-bug-repro-app-router</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
