import React from 'react';
import Link from 'next/link';
import Title from './styles/Title';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';

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
              <a>Edit</a>
            </Link>
            <Link
              href={{
                pathname: 'update',
                query: { id: item.id }
              }}
            >
              <a>Edit</a>
            </Link>
            <Link
              href={{
                pathname: 'update',
                query: { id: item.id }
              }}
            >
              <a>Edit</a>
            </Link>
          </div>
        </Title>
      </ItemStyles>
    );
  }
}
