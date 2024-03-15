import { unstable_setRequestLocale } from 'next-intl/server';

type Props = {
	params: {
		locale: string;
	};
};

const Page = async ({params}: Props) => {
	unstable_setRequestLocale(params.locale);
	return <div>ArticlesPage</div>;
};

export default Page;
