import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { SongList } from "./components/SongList";
import { CreateSong } from "./components/SongCreate";
import { Router, Route, hashHistory, IndexRoute } from "react-router";
import { SongDetails } from "./components/SongDetails";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

const App = ({ children }) => {
  return <div className="container">{children}</div>;
};

const Root = () => (
  <ApolloProvider client={client}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={SongList} />
        <Route path="songs/create" component={CreateSong} />
        <Route path="songs/:id" component={SongDetails} />
      </Route>
    </Router>
  </ApolloProvider>
);

ReactDOM.render(<Root />, document.querySelector("#root"));
