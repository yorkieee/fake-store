import React, { useState, useContext } from 'react';
import { AuthContext } from '../AuthContext';
// import { LoginContext } from '../App';

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffc107',
    },
    secondary: {
      main: '#ff9100',
    },
  },
});

export const Login = () => {
  const { LogInUser } = useContext(AuthContext);
  const [loginState, setLoginState] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    LogInUser(loginState.email, loginState.password);

    setLoginState(!loginState);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Log in
            </Typography>
            <form onSubmit={handleOnSubmit}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                onChange={handleChange}
                placeholder="Email"
                name="email"
                required
                value={loginState.email}
              />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                onChange={handleChange}
                placeholder="Enter Password"
                name="password"
                required
                value={loginState.password}
              />

              <button type="submit">Log In</button>

              <Grid container></Grid>
            </form>
          </Box>
        </Container>
      </ThemeProvider>
      <h2>{`Logged in: ${loginState}`}</h2>
    </div>
  );
};
