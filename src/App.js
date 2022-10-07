import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ShopList } from "./ShopList";
import { ProductDisplay } from "./ProductDisplay";
import { ErrorPage } from "./ErrorPage";

function App() {
  return (
    <Router>
      <nav>
        <Link to="./ShopList"> Home </Link>
      </nav>
      <Routes>
        <Route path="/ShopList" element={<ShopList />} />
        <Route
          path="/ProductDisplay"
          element={<ProductDisplay itemsData={null} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
