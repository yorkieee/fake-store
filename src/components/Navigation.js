import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

export const Navigation = () => {
  const { logout, user } = useContext(AuthContext);

  console.log(typeof user);
  console.log(user?.uid);

  const handleLogout = () => {
    logout();
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">SignUp</Link>
      <Link to="/wishlist">Wishlist</Link>
      <button onClick={handleLogout}>{user?.uid ? 'logout' : 'login'}</button>
    </nav>
  );
};
