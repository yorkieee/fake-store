import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { useDBData } from '../hooks/useDBData';
import { WishlistCard } from './WishlistCard';

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
      <h1>Wishlist</h1>
      <Container>
        <Grid container spacing={3}>
          {filteredItems.map((item) => (
            <Grid item key={item.id} xs={12} md={4} lg={3}>
              <WishlistCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

//  key={id}>{item.title} //
