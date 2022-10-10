import React, { useContext } from 'react';
import { LoginContext } from '../App';
export const Login = () => {
  const [loginState, setLoginState] = useContext(LoginContext);

  const onLoginClick = () => {
    setLoginState(!loginState);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <h2>{`Logged in: ${loginState}`}</h2>
      <button onClick={onLoginClick}>Log In</button>
    </div>
  );
};
