import React from "react";

import "../style/style.css";
import { useMutation } from "@apollo/react-hooks";
import { LIKE_LYRICS } from "../queries";

export const LyricsList = (props) => {
  const { lyrics } = props;
  const [likeLyric] = useMutation(LIKE_LYRICS);

  const likeLyrics = (id, likes) => {
    likeLyric({
      variables: {
        id,
      },
      optimisticResponse: {
        __typename: "Mutation",
        likeLyric: {
          id,
          __typename: "LyricType",
          likes: likes + 1,
        },
      },
    });
  };

  return (
    <>
      {lyrics && (
        <ul className="collection">
          {lyrics.map(({ content, id, likes }) => (
            <li className="collection-item lyrics" key={id}>
              {content}
              <div className="lyrics-vote">
                <i
                  className="material-icons vote-hand"
                  onClick={() => likeLyrics(id, likes)}
                >
                  thumb_up
                </i>
                {likes}
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
