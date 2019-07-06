import React from 'react';
import Link from 'next/link';
import Title from './styles/Title';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';
import DeleteItem from './DeleteItem';
import User from './User';
import FsLightbox from 'fslightbox-react';

export default function Item({ item }) {
  return (
    <ItemStyles>
      {item.image && (
        <img
          src={item.image}
          alt={item.description}
          onClick={() => window.open(item.image)}
        />
      )}
      <Title>
        <a>{item.title}</a>
      </Title>
      <PriceTag>{formatMoney(item.price)}</PriceTag>
      <p>{item.description}</p>
      <User>
        {({ data }) => {
          return (
            data.me && (
              <div className="buttonList">
                <Link
                  href={{
                    pathname: 'update',
                    query: { id: item.id }
                  }}
                >
                  <a>Izmeni ✏️</a>
                </Link>
                <DeleteItem id={item.id}>Obrisi</DeleteItem>
              </div>
            )
          );
        }}
      </User>
    </ItemStyles>
  );
}
