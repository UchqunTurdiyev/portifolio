import { Box } from '@chakra-ui/react';
import React from 'react';
import { About, Hero } from '..';
import Contact from '@/pages/contact';
import Portifolio from '@/pages/portifolio';
import Services from '@/pages/services';
import Footer from '@/layout/footer/footer';
import Navbar from '../sidebarRight/navbar';

export default function Main({ hero, about, scills, portifolio }) {
	const bg = {
		html: '<html>',
		body: '<body>',
		head: '<h1>',
		headClose: '</h1>',
		parag: '<p>',
		paragClose: '</p>',
		btn: '<button>',
		btnClose: '</button>',
		header: '<h2>',
		headerClose: '</h2>',
		flex: '<Flex>',
		flexClose: '</Flex>',
		card: '<Card>',
		cardClose: '<Card />',
	};
	console.log(portifolio);
	return (
		<Box pl={36}>
			{hero.map(item => (
				<Hero key={item.node.id} {...bg} item={item.node} />
			))}
			{about.map(item => (
				<About key={item.node.id} {...bg} item={item.node} scills={scills} />
			))}
			<Portifolio />
			<Services />
			<Contact />
			<Footer />
			<Navbar />
		</Box>
	);
}
