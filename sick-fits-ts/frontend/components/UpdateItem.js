import React from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import formatMoney from '../lib/formatMoney';
import ErrorMessage from './ErrorMessage';
import Router from 'next/router';

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      description
      price
    }
  }
`;

const UPDATE_ITEM_MUTATION = gql`
  mutation UPDATE_ITEM_MUTATION(
    $id: ID!
    $title: String
    $description: String
    $price: Int
    $image: String
    $largeImage: String
  ) {
    updateItem(
      id: $id
      title: $title
      description: $description
      price: $price
      image: $image
      largeImage: $largeImage
    ) {
      id
    }
  }
`;

export default class UpdateItem extends React.Component {
  state = {};

  handleChange = event => {
    const { name, type, value } = event.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: value });
  };

  uploadFile = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'products');

    const res = await fetch(
      'http://api.cloudinary.com/v1_1/dragan1810/image/upload',
      { method: 'POST', body: data }
    );

    const file = await res.json();
    console.log(file);

    this.setState({
      image: file.secure_url,
      largeImage: file.eager[0].secure_url
    });
  };

  updateItem = async (e, updateItemMutation) => {
    e.preventDefault();
    const res = await updateItemMutation({
      variables: {
        id: this.props.id,
        ...this.state
      }
    });
    console.log(res);
    //Router.push({
    // pathname: '/id'
    //query: { id: res.data.createItem.id }
    //});
  };

  render() {
    // ID NOT PROVIDED FIX HERE
    return (
      <Query query={SINGLE_ITEM_QUERY} variables={{ id: this.props.id }}>
        {({ data, loading }) => {
          if (loading) return <p>Loading....</p>;
          if (!data) return <p>No data found for ID</p>;
          return (
            <Mutation mutation={UPDATE_ITEM_MUTATION} variables={this.state}>
              {(updateItem, { loading, error }) => (
                <Form onSubmit={e => this.updateItem(e, updateItem)}>
                  {/* <Error error={error} /> */}
                  <fieldset disabled={loading} aria-busy={loading}>
                    <label htmlFor="file">
                      Image
                      <input
                        type="file"
                        id="file"
                        name="file"
                        placeholder="Upload an Image"
                        required
                        //value={this.state.file}
                        onChange={this.uploadFile}
                      />
                      {this.state.image && (
                        <img src={this.state.image} alt="Upload Preview" />
                      )}
                    </label>
                    <label htmlFor="title">
                      Title
                      <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Title"
                        required
                        defaultValue={this.state.title}
                        onChange={this.handleChange}
                      />
                    </label>
                    <label htmlFor="price">
                      Price
                      <input
                        type="number"
                        id="price"
                        name="price"
                        placeholder="Price"
                        required
                        defaultValue={this.state.price}
                        onChange={this.handleChange}
                      />
                    </label>
                    <label htmlFor="description">
                      Description
                      <textarea
                        type="text"
                        id="description"
                        name="description"
                        placeholder="description"
                        required
                        defaultValue={this.state.description}
                        onChange={this.handleChange}
                      />
                    </label>
                    <button type="submit">Submit</button>
                  </fieldset>
                </Form>
              )}
            </Mutation>
          );
        }}
      </Query>
    );
  }
}

export { UPDATE_ITEM_MUTATION };