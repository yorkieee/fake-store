import React, { useState, useContext } from 'react';
import { AuthContext } from '../AuthContext';
// import { LoginContext } from '../App';

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    LogInUser(loginState.email, loginState.password);

    setLoginState(!loginState);
    navigate(`/profile`);
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
              {'Log in'}
            </Typography>
            <form onSubmit={handleOnSubmit}>
              <div
                style={{ display: 'flex', flexDirection: 'column', width: 300 }}
                className="container"
              >
                <label htmlFor="email">{'Email'}</label>
                <TextField
                  type="email"
                  onChange={handleChange}
                  placeholder="Email"
                  name="email"
                  required
                  value={loginState.email}
                />

                <label htmlFor="password">{'Password'}</label>
                <TextField
                  type="password"
                  onChange={handleChange}
                  placeholder="Enter Password"
                  name="password"
                  required
                  value={loginState.password}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  {'Log In'}
                </Button>

                <Grid container>
                  <Button
                    onClick={() => {
                      navigate(`/signup`);
                    }}
                  >
                    {'No account yet? Sign Up'}
                  </Button>
                </Grid>
              </div>
            </form>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};
