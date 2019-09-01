import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { endpoint, real_endpoint } from '../config';

function createClient({ ctx, headers, initialState }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : real_endpoint,
    cache: new InMemoryCache().restore(initialState || {}),
    request: async operation => {
      // check headers
      operation.setContext({
        credentials: 'include',
        headers
      });
    }
  });
}

export default withApollo(createClient);
