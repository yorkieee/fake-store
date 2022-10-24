/** @jsxImportSource @emotion/react */
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import isUserLoggedIn from '../hooks/useUserIsLoggedIn';

const LogoutButton = ({ onClick, renderInColumn }) => {
  return (
    <div css={styles.button(renderInColumn)} onClick={onClick}>
      {'Logout'}
    </div>
  );
};

const LoginButton = ({ renderInColumn }) => {
  return (
    <Link to="/login" css={styles.button(renderInColumn)}>
      Login
    </Link>
  );
};

export const Navigation = ({ renderInColumn = false }) => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav style={styles.container(renderInColumn)}>
      <Link to="/" css={styles.button(renderInColumn)}>
        {'Home'}
      </Link>
      {
        <Link
          to={isUserLoggedIn ? '/wishlist' : '/login'}
          css={styles.button(renderInColumn)}
        >
          {'Wishlist'}
        </Link>
      }
      {isUserLoggedIn && (
        <Link to="/profile" css={styles.button(renderInColumn)}>
          {'User Profile'}
        </Link>
      )}
      {!isUserLoggedIn && (
        <Link to="/signup" css={styles.button(renderInColumn)}>
          {'Sign Up'}
        </Link>
      )}

      {isUserLoggedIn ? (
        <LogoutButton renderInColumn={renderInColumn} onClick={handleLogout} />
      ) : (
        <LoginButton renderInColumn={renderInColumn} />
      )}
    </nav>
  );
};

const styles = {
  container: (renderInColumn) => ({
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: renderInColumn ? 'column' : 'row',
    width: 500,
  }),
  button: (renderInColumn) =>
    renderInColumn
      ? {
          textDecoration: 'none',
          fontFamily: 'helvetica',
          fontSize: 32,
          marginBottom: 16,
          marginRight: 0,
          '&:hover': {
            color: 'white',
            cursor: 'pointer',
          },
        }
      : {
          textDecoration: 'none',
          fontFamily: 'helvetica',
          fontSize: 16,
          marginBottom: 0,
          marginRight: 32,
          '&:hover': {
            color: 'white',
            cursor: 'pointer',
          },
        },
};
