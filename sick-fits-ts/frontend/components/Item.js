import React from 'react';
import Link from 'next/link';
import Title from './styles/Title';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';
import DeleteItem from './DeleteItem';

export default class Item extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <ItemStyles>
        {item.image && <img src={item.image} alt={item.description} />}
        <Title>
          <Link
            href={{
              pathname: '/item',
              query: { id: item.id }
            }}
          >
            <a>{item.title}</a>
          </Link>
          <PriceTag>{formatMoney(item.price)}</PriceTag>
          <p>{item.description}</p>
          <div className="buttonList">
            <Link
              href={{
                pathname: 'update',
                query: { id: item.id }
              }}
            >
              <a style={{ color: 'black' }}>Edit</a>
            </Link>
            <Link
              href={{
                pathname: 'update',
                query: { id: item.id }
              }}
            >
              <a style={{ color: 'black' }}>Add to Cart</a>
            </Link>
            <Link
              href={{
                pathname: 'update',
                query: { id: item.id }
              }}
            >
              <DeleteItem>
                <a style={{ color: 'black' }}>Delete Item</a>
              </DeleteItem>
            </Link>
          </div>
        </Title>
      </ItemStyles>
    );
  }
}
