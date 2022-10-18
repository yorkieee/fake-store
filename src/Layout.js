import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Navigation } from './components/Navigation';
import { AppBar, Toolbar, CssBaseline } from '@mui/material';

const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Fake Store{' '}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
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

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        rowspacing={2}
        position="static"
        sx={{
          backgroundColor: 'orange',
        }}
      >
        <Toolbar>
          <Navigation />
        </Toolbar>
      </AppBar>

      <div>{children}</div>

      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Happy Shopping!{' '}
        </Typography>
        <Copyright />
      </Box>
    </ThemeProvider>
  );
}
