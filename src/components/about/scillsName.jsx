import { getScills } from '@/server/incex';
import { Box, Card, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

export default function ScillsName({ param }) {
	const [scillDetail, setScillDetail] = useState([]);
	useEffect(() => {
		getScills().then(res => setScillDetail(res));
	}, []);
	console.log(param);

	const scilItem = scillDetail.filter(item => item.node.title === param.name);
	console.log(scilItem);
	return (
		<Box h={'100vh'} py={10} pl={40} w={'full'}>
			{scilItem.map(item => (
				<Card key={item.node.id} maxW='xl' mx={'auto'}>
					<CardBody>
						<Image src={item.node.img.url} alt={item.node.title} borderRadius='lg' />
						<Stack mt='6' spacing='3'>
							<Heading size='2xl'>{item.node.title}</Heading>
							<Text>{item.node.desc}</Text>
						</Stack>
					</CardBody>
				</Card>
			))}
		</Box>
	);
}
