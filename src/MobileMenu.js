import React from 'react';
import { Container } from '@mui/material';
import { Navigation } from './components/Navigation';

export const MobileMenu = () => (
  <Container sx={{ display: { sm: 'none' } }}>
    <div style={styles.container}>
      <Navigation renderInColumn />
    </div>
  </Container>
);

const styles = {
  container: {
    zIndex: 20,
    position: 'absolute',
    left: 0,
    width: '100%',
    padding: 8,
    backgroundColor: '#ffc107',
  },
  paragraph: {
    position: 'absolute',
    width: 150,
    height: 300,
    backgroundColor: 'red',
  },
};
