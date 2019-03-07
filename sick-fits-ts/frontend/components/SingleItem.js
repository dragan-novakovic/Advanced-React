import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      description
      largeItem
    }
  }
`;

export default class SingleItem extends React.Component {
  render() {
    return (
      <Query query={SINGLE_ITEM_QUERY} variables={{ id: this.props.id }}>
        {({ error, loading, data }) => {
          if (error) return <p>Error!</p>;
          if (loading) return <p>Loading!!</p>;
          if (!data.item) return <p>No data</p>;
        }}
      </Query>
    );
  }
}
