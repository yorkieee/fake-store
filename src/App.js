import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, CssBaseline } from '@mui/material';

import SignUp from './pages/SignUp';
import Layout from './Layout';
import { Home } from './pages/Home';
import { ErrorPage } from './pages/ErrorPage';
import { ProductPage } from './pages/ProductPage';
import { Login } from './pages/Login';

import { useFetchData } from './hooks/useFetchData';

export const LoginContext = React.createContext([false, () => {}]);

const App = () => {
  const [itemsData, setItemsData] = useState([]);
  useFetchData(setItemsData);

  const LoginStateControl = useState(false);

  return (
    <LoginContext.Provider value={LoginStateControl}>
      <Router>
        <CssBaseline />
        <AppBar
          rowspacing={2}
          position="static"
          sx={{
            backgroundColor: 'orange',
          }}
        >
          <Toolbar>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/login">Login</Link>
              <Link to="/signup">SignUp</Link>
            </nav>
          </Toolbar>
        </AppBar>

        <Layout>
          <Routes>
            <Route path="/" element={<Home itemsData={itemsData} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/ProductDisplay">
              <Route
                path=":id"
                element={<ProductPage itemsData={itemsData} />}
              />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Layout>
      </Router>
    </LoginContext.Provider>
  );
};

export default App;
