import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import { Grid, ImageList } from '@mui/material';
import { ImageListItem } from '@mui/material';

export const ProductPage = ({ itemsData }) => {
  const { id } = useParams();
  const parsedId = parseInt(id.split('=')[1], 10);
  const itemToRender = itemsData.find((item) => {
    return item.id === parsedId;
  });

  return (
    <>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={2}>
          <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
            <ImageListItem key={itemToRender.image}>
              <img
                src={itemToRender.image}
                alt=""
                loading="lazy"
                srcSet={`${itemToRender.image} 3x`}
              />
            </ImageListItem>
          </ImageList>
          <Card sx={{ maxWidth: 345, maxHeight: 310 }}>
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
              <Typography component="h2"> {itemToRender.price}€</Typography>
            </CardContent>
            <CardActions>
              <Button size="medium" color="secondary">
                Add to 💛
              </Button>
              <Button size="medium" color="secondary">
                Add to cart
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Container>
    </>
  );
};
