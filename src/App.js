import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ShopList } from "./ShopList";
import { ProductDisplay } from "./ProductDisplay";
import { ErrorPage } from "./ErrorPage";
import { useFetchData } from "./hooks/useFetchData";

function App() {
  const [itemsData, setItemsData] = useState([]);
  useFetchData(setItemsData);

  return (
    <Router>
      <nav>
        <Link to="/ShopList"> Home </Link>
      </nav>
      <Routes>
        <Route path="/ShopList" element={<ShopList itemsData={itemsData} />} />
        <Route path="/ProductDisplay">
          <Route
            path=":id"
            element={<ProductDisplay itemsData={itemsData} />}
          />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
