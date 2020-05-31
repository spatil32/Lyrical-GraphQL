import React, { useState, useCallback } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { withRouter } from 'react-router';

import '../style/style.css';
import { ADD_SONG, GET_SONGS } from '../queries';


export const CreateSong = withRouter((props) => {
	const { history } = props;
	const [title, setTitle] = useState('');
	const [addSong, { data, loading, error }] = useMutation(ADD_SONG, {
		refetchQueries: [{
			query: GET_SONGS
		}]
	});

	const addNewSong = useCallback((event) => {
		// e.preventDefault();
		addSong({
			variables: {
				title: title
			}
		}).then(() => {
			setTitle('');
			history.push('/list');
		})
	});

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	return (
		<div>
			<h4>Add New Song</h4>
			<form>
				<label>Song Title</label>
				<input
					className="input"
					onChange={(event) => setTitle(event.target.value)}
					value={title}
				/>
				<button onClick={addNewSong}>Add</button>
			</form>
			{
				data && <div>Song {data.addSong.title} created with id: {data.addSong.id}</div>
			}
		</div>
	)
});