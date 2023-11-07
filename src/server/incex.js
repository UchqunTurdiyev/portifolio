import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
	const query = gql`
		query MyQuery {
			heroesConnection {
				edges {
					node {
						title
						photo {
							url
						}
						id
						hero
						desc
						createdAt
					}
				}
			}
		}
	`;

	const result = await request(graphqlAPI, query);
	return result.heroesConnection.edges;
};

export const getAbout = async () => {
	const query = gql`
		query MyQuery {
			aboutsConnection {
				edges {
					node {
						bio
						createdAt
						hobi
						id
						job
						name
						phone
						slug
						work
						photo {
							url
						}
					}
				}
			}
		}
	`;

	const result = await request(graphqlAPI, query);
	return result.aboutsConnection.edges;
};

export const getScills = async () => {
	const query = gql`
		query Assets {
			scillsConnection {
				edges {
					node {
						createdAt
						dataTime
						id
						slug
						title
						desc
						img {
							url
						}
					}
				}
			}
		}
	`;
	const result = await request(graphqlAPI, query);
	return result.scillsConnection.edges;
};

export const getServices = async () => {
	const query = gql`
		query Assets {
			servicesConnection {
				edges {
					node {
						desc
						id
						title
					}
				}
			}
		}
	`;
	const result = await request(graphqlAPI, query);
	return result.servicesConnection.edges;
};

export const getContent = async () => {
	const query = gql`
		query Assets {
			contentsConnection {
				edges {
					node {
						bio
						data
						id
						img {
							url
						}
						slug
						title
					}
				}
			}
		}
	`;

	const result = await request(graphqlAPI, query);
	return result.contentsConnection.edges;
};
