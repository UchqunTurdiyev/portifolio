import { Box, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { BsGithub } from 'react-icons/bs';

export default function Navbar() {
	return (
		<Box position={'fixed'} top={'40'} right={10}>
			<Flex flexDirection={'column'} alignItems={'center'} gap={2}>
				<Link href={'/'} fontSize={'6xl'}>
					<BsGithub size={'32'} color='#09f7d3' />
				</Link>
				<Box w={'2.5px'} h={12} bg={'#555'}></Box>
				<BsGithub size={'32'} color='#09f7d3' />
				<Box w={'2.5px'} h={12} bg={'#555'}></Box>

				<BsGithub size={'32'} color='#09f7d3' />
				<Box w={'2.5px'} h={12} bg={'#555'}></Box>

				<BsGithub size={'32'} color='#09f7d3' />
			</Flex>
		</Box>
	);
}
