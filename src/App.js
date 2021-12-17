import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react';
import Home from './pages/Home';
import {ApolloClient,InMemoryCache,ApolloProvider,HttpLink} from '@apollo/client'


function App() {
  const client = new ApolloClient({
    // uri: 'https://48p1r2roz4.sse.codesandbox.io',
    uri: "https://graphql-weather-api.herokuapp.com/",
    cache: new InMemoryCache()
  })
  return (
    <ApolloProvider client={client}>
     <Home/>
    </ApolloProvider>
  );
}

export default App;
