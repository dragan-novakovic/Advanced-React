import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import { endpoint, real_endpoint } from '../config';
import { LOCAL_STATE_QUERY } from '../components/Cart';

function createClient({ headers }: any) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : real_endpoint,
    request: async operation => {
      // check headers
      operation.setContext({
        credentials: 'include',
        headers
      });
    },
    clientState: {
      resolvers: {
        Mutation: {
          toggleCart(_, _variables, client) {
            // read the cartOpen
            const { cartOpen } = client.cache.readQuery({
              query: LOCAL_STATE_QUERY
            });
            // write the cart state
            const data = {
              data: { cartOpen: !cartOpen }
            };
            client.cache.writeData(data);
            return data;
          }
        }
      },
      defaults: {
        cartOpen: false
      }
    }
  });
}

export default withApollo(createClient);
