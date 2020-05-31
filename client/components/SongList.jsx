import React, { useCallback } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_SONGS, DELETE_SONG } from '../queries';

import '../style/style.css';

export const SongList = () => {
	const { loading, error, data } = useQuery(GET_SONGS);
	const [deleteSong, { data: deletedData, loading: deleteLoading, error: deleteError }] = useMutation(DELETE_SONG, {
		refetchQueries: [{
			query: GET_SONGS
		}]
	});

	const deleteSelectedSong = useCallback((event, id) => {
		event.preventDefault();
		deleteSong({
			variables: {
				id: id,
			}
		})
	});

	if(deleteLoading) return <p>Deleting...</p>;
	if(deleteError) return <p>Error on Delete :(</p>

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;
		
	return data.songs.map(({ title, id }) => (
		<div className="contain" key={id}>
			{title}
			<i className="material-icons" onClick={(event) => deleteSelectedSong(event, id)}>clear</i>
		</div>
	));
}
