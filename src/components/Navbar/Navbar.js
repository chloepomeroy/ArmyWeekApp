import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
<<<<<<< Updated upstream:src/components/navbar/navbar.js
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
=======
import ButtonGroup from '@mui/material/ButtonGroup';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
>>>>>>> Stashed changes:src/components/Navbar/navbar.js
import AccountCircle from '@mui/icons-material/AccountCircle';
import PropTypes from 'prop-types';
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import NavbarContainer from "./Navbar.style";
import { Stack } from '@mui/material';

const pages = ['Calendar', 'Events', 'Messages','Digital Army', 'Help'];
const settings = ['Profile', 'Dashboard', 'Logout'];



const pages = ['Calendar', 'My Events', 'Help'];
const settings = ['Profile','Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ARMY WEEK 2022
          </Typography>

<<<<<<< Updated upstream:src/components/navbar/navbar.js
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
=======
          <Box sx={{ flexGrow: 5, display: { xs: 'flex', md: 'none' } }}>
           <Tooltip title="Open settings">
              <IconButton
>>>>>>> Stashed changes:src/components/Navbar/navbar.js
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
<<<<<<< Updated upstream:src/components/navbar/navbar.js
<<<<<<< Updated upstream:src/components/navbar/navbar.js
=======
            </Tooltip>*/}
>>>>>>> Stashed changes:src/components/Navbar/navbar.js
=======
            </Tooltip>
>>>>>>> Stashed changes:src/components/Navbar/navbar.js
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >

              
                <MenuItem>
                  <Router>
                      <Stack spacing={2}>
                        <Button href="/calendar" target="_blank" variant="contained">
                        Calendar
                        </Button>
                        <Button href="/my-events" target="_blank" variant="contained">
                        My Events
                        </Button>
                        <Button href="/messages" target="_blank" variant="contained">
                        Messages
                        </Button>
                        <Button href="/using-ssr" target="_blank" variant="contained">
                        Digital Army
                        </Button>
                        <Button href="/faq" target="_blank" variant="contained">
                        Help
                        </Button>
                        </Stack>
                    </Router>
=======
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
>>>>>>> Stashed changes:src/components/Navbar/navbar.js
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ARMY WEEK
          </Typography>
<<<<<<< Updated upstream:src/components/navbar/navbar.js
          <Box sx={{  display: { xs: 'none', md: 'flex' } }}>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <ThemeProvider theme={theme}>
                    <Router>
                        <Button href="/calendar" target="_blank" variant="contained">
                        Calendar
                        </Button>
                        <Button href="/my-events" target="_blank" variant="contained">
                        My Events
                        </Button>
                        <Button href="/messages" target="_blank" variant="contained">
                        Messages
                        </Button>
                        <Button href="/using-ssr" target="_blank" variant="contained">
                        Digital Army
                        </Button>
                        <Button href="/faq" target="_blank" variant="contained">
                        Help
                        </Button>
                    </Router>

      </ThemeProvider>
      </ButtonGroup>
     
=======
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
>>>>>>> Stashed changes:src/components/Navbar/navbar.js
          </Box>

<<<<<<< Updated upstream:src/components/navbar/navbar.js
<<<<<<< Updated upstream:src/components/navbar/navbar.js
          <Box sx={{ flexGrow: 0 }}>
=======
          {/*<Box>
>>>>>>> Stashed changes:src/components/Navbar/navbar.js
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
=======
       <Box>
              <Tooltip title="Open settings">
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar2"
                aria-haspopup="true"
                onClick={handleOpenUserMenu}
                color="inherit"
                textAlign="right"
              >
                <AccountCircle />
>>>>>>> Stashed changes:src/components/Navbar/navbar.js
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
