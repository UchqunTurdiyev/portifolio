import React from 'react';
import Header from './header/header';
import { Box } from '@chakra-ui/react';

export default function Layout({ children }) {
	return (
		<Box>
			<Header />
			<Box pt={'4'} bg={'#000'}>
				{children}
			</Box>
		</Box>
	);
}

// Hay order komponent

export const withLayout = Component => {
	return function withLayoutComponent(props) {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
};
