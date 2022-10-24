import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../AuthContext';
import {
  Button,
  ThemeProvider,
  Container,
  Grid,
  createTheme,
  Typography,
  Box,
  TextField,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useIsUserLoggedIn } from '../components/Navigation';

const SignUp = () => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const { SignUpUser } = useContext(AuthContext);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();

  const isUserLoggedIn = useIsUserLoggedIn();
  useEffect(() => {
    if (isUserLoggedIn) {
      navigate(`/profile`);
    }
  }, [isUserLoggedIn]);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    SignUpUser(state.email, state.password);
    // setLoginState(loginState);
    navigate(`/profile`);
  };
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

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form onSubmit={handleOnSubmit}>
            <div
              style={{ display: 'flex', flexDirection: 'column', width: 300 }}
              className="container"
            >
              <label htmlFor="displayName">First name</label>
              <TextField
                type="text"
                fullWidth
                onChange={handleChange}
                placeholder="First name"
                name="firstName"
                required
                value={state.firstName}
              />

              <label htmlFor="lastName">Last name</label>
              <TextField
                type="text"
                onChange={handleChange}
                placeholder="Last name"
                name="lastName"
                required
                value={state.lastName}
              />

              <label htmlFor="email">Email</label>
              <TextField
                type="email"
                onChange={handleChange}
                placeholder="Email"
                name="email"
                required
                value={state.email}
              />

              <label htmlFor="password">Password</label>
              <TextField
                type="password"
                onChange={handleChange}
                placeholder="Enter Password"
                name="password"
                required
                value={state.password}
              />

              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                type="submit"
              >
                Register
              </Button>

              <Grid item>
                <Button
                  onClick={() => {
                    navigate(`/login`);
                  }}
                >
                  {' '}
                  Already have an account? Log in
                </Button>
              </Grid>
            </div>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default SignUp;
