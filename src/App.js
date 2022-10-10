import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { useFetchData } from './hooks/useFetchData';

import { Home } from './pages/Home';
import { ErrorPage } from './pages/ErrorPage';
import { ProductPage } from './pages/ProductPage';

function App() {
  const [itemsData, setItemsData] = useState([]);
  useFetchData(setItemsData);

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home itemsData={itemsData} />} />
        <Route path="/ProductDisplay">
          <Route path=":id" element={<ProductPage itemsData={itemsData} />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
