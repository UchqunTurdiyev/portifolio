import React from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import { Box } from '@chakra-ui/react';

export default function Layout() {
	return (
		<Box>
			<Header />
			<Box>{children}</Box>
			<Footer />
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
