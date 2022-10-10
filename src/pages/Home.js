import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';

import { ItemCard } from '../ItemCard';
import { Container } from '@mui/system';

import { LoginContext } from '../App';

export const Home = ({ itemsData }) => {
  const [loginState] = useContext(LoginContext);

  return (
    <div>
      <Container>
        <p>{`User is loged in ${loginState}`}</p>
        <Grid container spacing={4}>
          {itemsData.map((item, id) => (
            <Grid item key={id} xs={12} md={3} lg={4}>
              <ItemCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};
