import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SignUp from './pages/SignUp';
import Layout from './Layout';
import { Home } from './pages/Home';
import { ErrorPage } from './pages/ErrorPage';
import { ProductPage } from './pages/ProductPage';
import { Login } from './pages/Login';

import { useFetchData } from './hooks/useFetchData';
import { AuthContextProvider } from './AuthContext.js';
import { Wishlist } from './pages/Wishlist';
import Profile from './pages/Profile';

export const LoginContext = React.createContext([false, () => {}]);

const App = () => {
  const [itemsData, setItemsData] = useState([]);
  useFetchData(setItemsData);

  return (
    <AuthContextProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home itemsData={itemsData} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/wishlist"
              element={<Wishlist itemsData={itemsData} />}
            />
            <Route path="/ProductDisplay">
              <Route
                path=":id"
                element={<ProductPage itemsData={itemsData} />}
              />
            </Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Layout>
      </Router>
    </AuthContextProvider>
  );
};

export default App;
