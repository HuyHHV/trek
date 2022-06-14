import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Nav from './components/navbar/Nav';
import LoginPage from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Auth from './utils/auth';
import Ranking from './pages/Ranking';

const httpLink = createHttpLink({
  uri: '/graphql',
});



const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      {Auth.loggedIn() ? (<Nav/>) : (<> </> )}
      <Routes>
        <Route path="/" element = {Auth.loggedIn() ? (<Home/>) : (<LoginPage/>)}/>
        <Route path="/profile" element = {<Profile/>}/>
        <Route path="/ranking" element = {<Ranking/>}/>
      </Routes>
    </ApolloProvider>
  );
}

export default App;
