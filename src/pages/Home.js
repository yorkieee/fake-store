import React from 'react';
import Grid from '@mui/material/Grid';

import { ItemCard } from '../pages/ItemCard';
import { Container } from '@mui/system';

export const Home = ({ itemsData }) => {
  return (
    <Container>
      <p className="test">Welcome to the Fake Store</p>
      <Grid container spacing={4}>
        {itemsData.map((item, id) => (
          <Grid item key={id} xs={12} md={3} lg={4}>
            <ItemCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
