import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import { Grid, Box } from '@mui/material';
import { useAddToWishlist } from '../hooks/useAddToWishlist';

export const ProductPage = ({ itemsData }) => {
  const { id } = useParams();
  const parsedId = parseInt(id.split('=')[1], 10);
  const itemToRender = itemsData.find((item) => {
    return item.id === parsedId;
  });

  const addToWishList = useAddToWishlist();

  const onClick = () => {
    addToWishList({ id: itemToRender.id });
  };

  return (
    <Box>
      <Container className="conatiner" maxWidth="md">
        <Grid
          item
          xs={11}
          md={4}
          lg={2}
          display="flex"
          justifyContent="space-around"
        >
          <img
            src={itemToRender.image}
            alt=""
            loading="lazy"
            style={{
              width: '40%',
            }}
          />

          <Card sx={{ maxWidth: 345 }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                fontWeight={'bold'}
              >
                {itemToRender.title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {itemToRender.category}
              </Typography>
              <Typography sx={{ fontWeight: 500 }}>
                {itemToRender.description}
              </Typography>
              <Typography component="h3"> {itemToRender.price}€</Typography>
            </CardContent>
            <CardActions>
              <Button onClick={onClick} size="medium" color="secondary">
                Add to 💛
              </Button>
              <Button size="medium" color="secondary">
                Add to cart
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Container>
    </Box>
  );
};
