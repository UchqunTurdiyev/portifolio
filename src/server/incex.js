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
