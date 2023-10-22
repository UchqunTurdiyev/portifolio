import Footer from '@/layout/footer/footer';
import Header from '@/layout/header/header';
import { Inter } from 'next/font/google';
import { getAbout, getPosts } from '@/server/incex';
import { Text } from '@chakra-ui/react';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ hero, about }) {
	console.log(about);
	return (
		<>
			<Header />
			{hero.map(item => (
				<Text key={item.node.id}>{item.node.title}</Text>
			))}
			<Footer />
		</>
	);
}

export async function getStaticProps() {
	const hero = (await getPosts()) || [];
	const about = (await getAbout()) || [];

	return {
		props: { hero, about },
	};
}
