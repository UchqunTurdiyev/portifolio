import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import ParticlesBack from '../particle/particlesBack';
import { PiCaretDoubleDownBold } from 'react-icons/pi';
import { Dancing_Script } from 'next/font/google';

const dancing = Dancing_Script({ subsets: ['latin'], weight: '700' }); // Call the font loader and assign it to a constant

export default function Hero(props) {
	const { body, html, parag, paragClose, headClose, head, btn, btnClose, item } = props;

	return (
		<Box position={'relative'} w={'full'} h={'100vh'}>
			<Box w={'full'} h={'full'} top={0} left={0} position={'absolute'} zIndex={0}>
				<ParticlesBack size={'32'} />
				<Image w={'full'} h={'full'} objectFit={'cover'} src={item.photo.url} alt='Uchqun Turdiev img' />
			</Box>
			<Box w={'full'} h={'screen'} position={'absolute'}>
				<Text className={dancing.className} textColor={'#626060'} fontWeight={'bold'} fontSize={'2xl'}>
					{html}
				</Text>
				<Text className={dancing.className} textColor={'#626060'} fontWeight={'semibold'} fontSize={'2xl'} pl={6}>
					{body}
				</Text>
				<Text className={dancing.className} textColor={'#626060'} fontWeight={'semibold'} fontSize={'2xl'} pl={10} pt={3}>
					{head}
				</Text>
				<Heading pl={20} fontSize={'7xl'} w={'530px'} fontWeight={'semibold'}>
					{item.title}
				</Heading>
				<Text className={dancing.className} textColor={'#626060'} fontWeight={'semibold'} fontSize={'lg'} pl={10} pt={1}>
					{headClose}
				</Text>
				<Text className={dancing.className} textColor={'#626060'} fontWeight={'semibold'} fontSize={'lg'} pl={14} pt={4}>
					{parag}
				</Text>
				<Heading textColor={'#626060'} fontWeight={'semibold'} fontSize={'xl'} pl={24}>
					{item.desc}
				</Heading>
				<Text className={dancing.className} textColor={'#626060'} fontWeight={'semibold'} fontSize={'lg'} pl={14} pt={2}>
					{paragClose}
				</Text>
				<Text className={dancing.className} textColor={'#626060'} fontWeight={'semibold'} fontSize={'lg'} pl={14} pt={2}>
					{btn}
				</Text>
				<Button className='btn_hero' mt={4} ml={20} variant={'outline'} px={10} py={5} fontSize={'lg'} fontWeight={'400'}>
					Contact Me
					<Box className='btn_con'></Box>
				</Button>
				<Text className={dancing.className} textColor={'#626060'} fontWeight={'semibold'} fontSize={'lg'} pl={14} pt={4}>
					{btnClose}
				</Text>
			</Box>
			<Box w={'full'} position={'absolute'} bottom={10} left={'0'} pr={2} display={'flex'} justifyContent={'space-between'}>
				<Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
					<Text className='scrol' w={28} position={'absolute'} bottom={20} transform={'rotate(90deg)'}>
						Scroll down
					</Text>
					<Text>
						<PiCaretDoubleDownBold size={'24'} />
					</Text>
				</Box>
				<Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
					<Text className='scrol' w={28} position={'absolute'} bottom={20} transform={'rotate(90deg)'}>
						Scroll down
					</Text>
					<Text>
						<PiCaretDoubleDownBold size={'24'} />
					</Text>
				</Box>
			</Box>
		</Box>
	);
}
