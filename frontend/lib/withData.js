import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import { endpoint, real_endpoint } from '../config';

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : real_endpoint,
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
