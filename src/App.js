import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { useFetchData } from './hooks/useFetchData';

import { Home } from './pages/Home';
import { ErrorPage } from './pages/ErrorPage';
import { ProductPage } from './pages/ProductPage';
import { Login } from './pages/Login';

export const LoginContext = React.createContext([false, () => {}]);

const App = () => {
  const [itemsData, setItemsData] = useState([]);
  useFetchData(setItemsData);

  const LoginStateControl = useState(false);

  return (
    <LoginContext.Provider value={LoginStateControl}>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home itemsData={itemsData} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ProductDisplay">
            <Route path=":id" element={<ProductPage itemsData={itemsData} />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </LoginContext.Provider>
  );
};

export default App;
