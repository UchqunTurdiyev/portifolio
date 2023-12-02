import { getScills } from '@/server/incex';
import { Box, Card, CardBody, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function ScillsName({ param }) {
	const [scillDetail, setScillDetail] = useState([]);
	useEffect(() => {
		getScills().then(res => setScillDetail(res));
	}, []);
	console.log(scillDetail);

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

			<Flex flexWrap={'wrap'} gap={4} pt={20}>
				{scillDetail.map(item => (
					<Link href={`/scill/${item.node.title}`}>
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
							<Image w={'80%'} h={'55%'} objectFit={'cover'} src={item.node.img?.url} alt='' />

							<Heading fontSize={'lg'}>{item.node.title}</Heading>
						</Box>
					</Link>
				))}
			</Flex>
		</Box>
	);
}
