import { useEffect } from "react";

export const useFetchData = (setList) => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products/");
      const data = await response.json();
      setList(data);
    };

    fetchData();
  }, []);
};
