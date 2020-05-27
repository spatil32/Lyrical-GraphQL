import React from 'react';
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';

const query = gql`
	{
		songs {
	  		title
		}
  	}
`;

export const SongList = () => {
	const { loading, error, data } = useQuery(query);

	if (loading) return <p>Loading...</p>;
  	if (error) return <p>Error :(</p>;
	console.log(data);
	return data.songs.map(({ title }) => (
		<div key={title}>
			{title}
		</div>
	));
}
