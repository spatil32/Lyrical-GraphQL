import React, { useEffect } from "react";
import { Link } from "react-router";
import { useQuery } from "@apollo/react-hooks";
import { GET_SONG } from "../queries";
import { AddLyrics } from "./AddLyrics";
import { LyricsList } from "./LyricsList";

export const SongDetails = (props) => {
  const { loading, error, data } = useQuery(GET_SONG, {
    variables: {
      id: props.params.id,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <Link to="/">Back</Link>
      <div className="contain" key={data.song.id}>
        {data.song.title}
      </div>
      <AddLyrics id={props.params.id} />
      <LyricsList lyrics={data.song.lyrics} />
    </div>
  );
};
