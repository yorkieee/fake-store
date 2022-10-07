import React from "react";
import { useLocation } from "react-router-dom";
export const ProductDisplay = (props) => {
  const { search: queryParam } = useLocation();

  console.log("queryParam", queryParam);
  console.log("Props", props);
  return (
    <div>
      <h1>ProductDisplay</h1>
      <h2></h2>
    </div>
  );
};
