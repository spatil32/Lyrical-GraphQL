import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { SongList } from './components/SongList';
import { CreateSong } from './components/SongCreate';
import { Router, Route, Redirect, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { SongDetails } from './components/SongDetails';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const App = (
  <ApolloProvider client={client}>
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route path="/">
          <SongList />
          <SongDetails />
          <CreateSong />
          </Route>
      </Switch>
    </Router>
  </ApolloProvider>
)

ReactDOM.render(
  App,
  document.querySelector('#root')
);
