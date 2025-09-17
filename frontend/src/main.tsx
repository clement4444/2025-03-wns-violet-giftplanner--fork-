import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.tsx'
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { ApolloProvider } from '@apollo/client/react';

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:3310/graphql" }),
  cache: new InMemoryCache(),
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </StrictMode>,
)
