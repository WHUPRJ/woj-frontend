import * as React from 'react';
import { Suspense } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import CssBaseline from '@mui/material/CssBaseline';
import { HashRouter } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { renderRoutes } from 'react-router-config';
import routes from './router';

const mdTheme = createTheme();

function App() {
  return (
    <HashRouter>
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar position="absolute">
            <Toolbar>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
                onClick={() => {
                  location.href = '/#/';
                }}
              >
                WOJ
              </Typography>
            </Toolbar>
          </AppBar>
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
            }}
          >
            <Toolbar />
            <Suspense fallback={<CircularProgress disableShrink />}>
              {renderRoutes(routes)}
            </Suspense>
          </Box>
        </Box>
      </ThemeProvider>
    </HashRouter>
  );
}
export default App;
