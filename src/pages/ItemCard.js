import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export const ItemCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ Width: 416, border: '1px solid orange ' }}>
      <CardHeader
        sx={{ Height: 250 }}
        title={item.title}
        subheader={item.category}
        titleTypographyProps={{
          fontSize: 14,
        }}
        subheaderTypographyProps={{
          fontSize: 10,
        }}
      />
      <CardMedia
        className="image"
        sx={{ backgroundPosition: 'top' }}
        component="img"
        height="420"
        src={item.image}
        alt=""
      />

      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {item.price} €
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="medium"
          color="secondary"
          onClick={() => {
            navigate(`/ProductDisplay/:id=${item.id}`);
          }}
        >
          Product Details
        </Button>
        <Button size="medium" color="secondary">
          Buy 🛒{' '}
        </Button>
      </CardActions>
    </Card>
  );
};
