import { gql } from "apollo-boost";

export const GET_SONGS = gql`
  {
    songs {
      id
      title
    }
  }
`;

export const ADD_SONG = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;

export const DELETE_SONG = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
      title
    }
  }
`;

export const GET_SONG = gql`
  query GetSong($id: ID!) {
    song(id: $id) {
      id
      title
      lyrics {
        id
        content
        likes
      }
    }
  }
`;

export const ADD_LYRICS = gql`
  mutation AddLyrics($songId: ID!, $content: String) {
    addLyricToSong(songId: $songId, content: $content) {
      title
      lyrics {
        id
        content
      }
    }
  }
`;

export const LIKE_LYRICS = gql`
  mutation LikeLyrics($id: ID) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;
