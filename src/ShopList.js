import React, { useState } from "react";
import Grid from "@mui/material/Grid";

import { ItemCard } from "./ItemCard";
import { useFetchData } from "./hooks/useFetchData";
import { Container } from "@mui/system";

export const ShopList = () => {
  const [list, setList] = useState([]);
  useFetchData(setList);

  return (
    <div>
      <Container>
        <Grid container spacing={4}>
          {list.map((item, id) => (
            <Grid item key={id} xs={12} md={3} lg={4}>
              <ItemCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};
