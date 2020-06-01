import React, { useCallback, useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { ADD_LYRICS, GET_SONG } from "../queries";

export const AddLyrics = (props) => {
  const [lyric, setLyric] = useState("");
  const [AddLyrics] = useMutation(ADD_LYRICS, {
    refetchQueries: [
      {
        query: GET_SONG,
        variables: {
          id: props.id,
        },
      },
    ],
  });

  const addNewLyric = useCallback((event) => {
    event.preventDefault();
    AddLyrics({
      variables: {
        songId: props.id,
        content: lyric,
      },
    }).then(() => {
      setLyric("");
    });
  });

  return (
    <div>
      <h4>Add Lyrics</h4>
      <form>
        <label>Lyrics</label>
        <input
          className="input"
          onChange={(event) => setLyric(event.target.value)}
          value={lyric}
        />
        <button onClick={addNewLyric}>Add</button>
      </form>
    </div>
  );
};
