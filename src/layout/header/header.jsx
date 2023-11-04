import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

export default function Header() {
	return (
		<Box w={'32'} h={'100vh'} bg={'gray.900'} position={'fixed'} top={0} left={0}>
			<Box w={'full'} h={'200px'} bg={'#111'}>
				<Heading fontWeight={'semibold'} fontSize={'7xl'} textAlign={'center'} pt={'3'}>
					U
				</Heading>
				<Text fontWeight={'semibold'} fontSize={'2xl'} pt={'2'} textAlign={'center'}>
					UCHQUN
				</Text>
				<Text fontSize={'sm'} pt={2} textAlign={'center'}>
					Web Deweloper
				</Text>
			</Box>
			<Flex py={8} w={'full'} h={'full'} flexDirection={'column'} alignItems={'center'} fontSize={'lg'}>
				{nav.map(item => (
					<Box key={item.id} w={'full'} borderBottom={'1px'} borderColor={'#759096'} mt={1} py={4}>
						<Text textAlign={'center'} color={'#759096'}>
							<Link href={item.slug}>{item.title}</Link>
						</Text>
					</Box>
				))}
			</Flex>
		</Box>
	);
}

export const nav = [
	{ id: 1, title: 'Home', slug: '/' },
	{ id: 2, title: 'About', slug: 'about' },
	{ id: 3, title: 'Portifolio', slug: 'portifolio' },
	{ id: 4, title: 'Services', slug: 'services' },
	{ id: 5, title: 'Contact', slug: 'contact' },
];
