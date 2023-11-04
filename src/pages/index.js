import { Karla } from 'next/font/google';
import { getAbout, getContent, getPosts, getScills, getServices } from '@/server/incex';
import { Box } from '@chakra-ui/react';
import { withLayout } from '@/layout/layout';
import { Main } from '@/components';

const karla = Karla({ subsets: ['latin'], weight: '300' });

function Home({ hero, about, scills, services, content }) {
	return (
		<Box className={karla.className}>
			<Main hero={hero} about={about} />
		</Box>
	);
}
export default withLayout(Home);

export async function getStaticProps() {
	const hero = (await getPosts()) || [];
	const about = (await getAbout()) || [];
	const scills = (await getScills()) || [];
	const services = (await getServices()) || [];
	const content = (await getContent()) || [];

	return {
		props: { hero, about, scills, services, content },
	};
}
