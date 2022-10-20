import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Navigation } from './components/Navigation';
import { AppBar, Toolbar, Container, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { MobileMenu } from './MobileMenu';

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

export const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <AppBar className="appBar">
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            />
          </IconButton>
          <Container sx={{ display: { xs: 'none', sm: 'initial' } }}>
            <Navigation />
          </Container>
        </Toolbar>
      </AppBar>
      <div style={{ paddingTop: 50 }}>
        {isMenuOpen && <MobileMenu />}

        <div>{children}</div>
      </div>
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
};
