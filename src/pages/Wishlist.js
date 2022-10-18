import React from 'react';
import { useDBData } from '../hooks/useDBData';

export const Wishlist = ({ itemsData }) => {
  const dbData = useDBData();
  const filteredItems = [];

  dbData.forEach((dbItem) => {
    const matchingItem = itemsData.find((item) => {
      return dbItem.data?.id === item?.id;
    });

    if (matchingItem) {
      filteredItems.push(matchingItem);
    }
  });

  return (
    <div>
      <h1>wishlist</h1>
      {filteredItems.map((item, id) => (
        <p key={id}>{item.title}</p>
      ))}
    </div>
  );
};
