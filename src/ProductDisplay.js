import React from "react";
import { useParams } from "react-router-dom";

export const ProductDisplay = ({ itemsData }) => {
  const { id } = useParams();
  const parsedId = parseInt(id.split("=")[1], 10);
  const itemToRender = itemsData.find((item) => {
    return item.id === parsedId;
  });

  return (
    <div>
      <h1>ProductDisplay</h1>
      <h2>itemToRender {itemToRender.title}</h2>
      <h2>Price {itemToRender.price}</h2>
    </div>
  );
};
