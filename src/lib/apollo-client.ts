import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

import { STRAPI_GRAPHQL } from "@env";

const httpLink = new HttpLink({
  uri: STRAPI_GRAPHQL, // Ajusta esta URL a la de tu instancia de Strapi
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
