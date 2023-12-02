import { Box, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

export default function Scills({ item }) {
	return (
		<Box
			w={'150px'}
			h={'150px'}
			borderRadius={5}
			boxShadow={'lg'}
			bg={'#09f7d3'}
			display={'flex'}
			alignItems={'center'}
			justifyContent={'center'}
			flexDirection={'column'}
			gap={4}
		>
			<Image w={'80%'} h={'55%'} objectFit={'cover'} src={item.img?.url} alt={item.title} />

			<Heading fontSize={'lg'}>{item.title}</Heading>
		</Box>
	);
}
