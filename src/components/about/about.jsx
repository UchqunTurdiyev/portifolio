import { Box, Divider, Flex, HStack, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Dancing_Script } from 'next/font/google';
import Scills from './scills';
import Link from 'next/link';

const dancing = Dancing_Script({ subsets: ['latin'], weight: '700' }); // Call the font loader and assign it to a constant

export default function About(props) {
	const { header, headerClose, flex, flexClose, card, cardClose, item, scills } = props;
	// 09f7d3

	return (
		<Box py={4}>
			<Text className={dancing.className} textColor={'#626060'} fontWeight={'semibold'} fontSize={'lg'} pl={4} pt={2}>
				{header}
			</Text>
			<Heading pl={10} color={'#09f7d3'}>
				My Bio
			</Heading>
			<Text className={dancing.className} textColor={'#626060'} fontWeight={'semibold'} fontSize={'lg'} pl={4} pt={2}>
				{headerClose}
			</Text>
			<Text className={dancing.className} textColor={'#626060'} fontWeight={'semibold'} fontSize={'lg'} pl={12} pt={2}>
				{flex}
			</Text>
			<Flex gap={5} pl={20} py={4}>
				<Box w={'600px'} h={'450'}>
					<Image w={'full'} height={'full'} objectFit={'cover'} src={item?.photo.url} alt='img' />
				</Box>
				<Box w={'full'} pl={6} pr={24}>
					<Heading>{'sa'}</Heading>
					<Text pt={4} fontSize={'lg'}>
						{item.bio}
					</Text>
					<Text fontSize={'2xl'} pt={4}>
						{item.work}
					</Text>
					<Divider my={2} py={'1px'} bg={'#09f7d3'} />
					<Box>
						<HStack>
							<Text fontSize={'2xl'} color={'#09f7d3'}>
								{'>'}
							</Text>
							<Text fontSize={'lg'}>Brithday: 7 february 1996</Text>
						</HStack>
						<HStack>
							<Text fontSize={'2xl'} color={'#09f7d3'}>
								{'>'}
							</Text>
							<Text fontSize={'lg'}>Work: {item.job}</Text>
						</HStack>
						<HStack>
							<Text fontSize={'2xl'} color={'#09f7d3'}>
								{'>'}
							</Text>
							<Text fontSize={'lg'}>Tell: {item.phone}</Text>
						</HStack>
						<HStack>
							<Text fontSize={'2xl'} color={'#09f7d3'}>
								{'>'}
							</Text>
							<Text fontSize={'lg'}>Hobby: {item.hobi}</Text>
						</HStack>
					</Box>
				</Box>
			</Flex>
			<Text className={dancing.className} textColor={'#626060'} fontWeight={'semibold'} fontSize={'lg'} pl={12} pt={2}>
				{flexClose}
			</Text>

			{/* SCILLS ============== */}
			<Text className={dancing.className} textColor={'#626060'} fontWeight={'semibold'} fontSize={'lg'} pl={4} pt={2}>
				{header}
			</Text>
			<Heading pl={10} color={'#09f7d3'}>
				My Scills
			</Heading>
			<Text className={dancing.className} textColor={'#626060'} fontWeight={'semibold'} fontSize={'lg'} pl={4} pt={2}>
				{headerClose}
			</Text>
			<Text className={dancing.className} textColor={'#626060'} fontWeight={'semibold'} fontSize={'lg'} pl={12} pt={2}>
				{card}
			</Text>
			<Flex px={20} gap={5} flexWrap={'wrap'}>
				{scills.map(item => (
					<Link key={item.node.id} href={`/scill/${item.node.title}`}>
						<Scills item={item.node} />
					</Link>
				))}
			</Flex>
			<Text className={dancing.className} textColor={'#626060'} fontWeight={'semibold'} fontSize={'lg'} pl={12} pt={2}>
				{cardClose}
			</Text>
		</Box>
	);
}
