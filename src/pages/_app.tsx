// css
import "@css";
import type { AppProps } from "next/app";
import { ApolloProvider } from '@apollo/client';
import client from '../lib/apollo-client'; // Ajusta esta ruta según la ubicación de tu archivo de configuración de Apollo Client

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
