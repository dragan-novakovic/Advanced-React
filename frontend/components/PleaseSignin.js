import { Query } from 'react-apollo';
import { CURRENT_USER_QUERY } from './User';
import Signin from './Signin';

export default function PleaseSignIn(props) {
  return (
    <Query query={CURRENT_USER_QUERY}>
      {({ data, loading, error }) => {
        if (loading) return <p>Loading....</p>;
        if (!data.me) {
          return (
            <div>
              <p>Please Sign In before continuing</p>
              <Signin />
            </div>
          );
        }
        return props.children;
      }}
    </Query>
  );
}
