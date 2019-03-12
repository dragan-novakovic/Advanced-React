import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import { ALL_ITEMS_QUERY } from './Items';

const DELETE_ITEM_MUTATION = gql`
  mutation DELETE_ITEM_MUTATION($id: ID!) {
    deleteItem(id: $id) {
      id
    }
  }
`;

class DeleteItem extends React.Component {
  update = (cache, payload) => {
    // manually update the cache to match to server
    const data = cache.readQuery({ query: ALL_ITEMS_QUERY });
    console.log(data);

    data.items = data.items.filter(
      item => item.id !== payload.data.deleteItem.id
    );

    cache.writeQuery({ query: ALL_ITEMS_QUERY, data });
  };
  render() {
    return (
      <Mutation
        mutation={DELETE_ITEM_MUTATION}
        variables={{ id: this.props.id }}
        update={this.update}
      >
        {(deleteItem, { error }) => {
          if (error) return <p>Errrrrr</p>;
          return (
            <button
              onClick={() => {
                if (confirm('Are you sure')) {
                  deleteItem().catch(err => alert(err.message));
                }
              }}
            >
              {this.props.children}
            </button>
          );
        }}
      </Mutation>
    );
  }
}

export default DeleteItem;
