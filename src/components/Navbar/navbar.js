import React from "react"

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Stack } from '@mui/material';
import { Home } from "@mui/icons-material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Today } from "@mui/icons-material";

import { t } from "i18next";
import { useTranslation } from "react-i18next";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import "../i18n"


// const settings = ['Profile', 'Dashboard', 'Logout'];

const buttonSX = {
  boxShadow: 32,
  '&:hover': {
    bgcolor: 'white', // theme.palette.primary.main
    color: 'green',
    boxShadow: 4,
  },
}

const ResponsiveAppBar = ({pageTitle}) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  const LinkBehavior = React.forwardRef((props, ref) => {
    const { href, ...other } = props;
    // Map href (MUI) -> to (react-router)
    return <RouterLink data-testid="custom-link" ref={ref} to={href} {...other} />;
  });

  LinkBehavior.propTypes = {
    href: PropTypes.oneOfType([
      PropTypes.shape({
        hash: PropTypes.string,
        pathname: PropTypes.string,
        search: PropTypes.string,
      }),
      PropTypes.string,
    ]).isRequired,
  };

  function Router(props) {
    const { children } = props;
    if (typeof window === 'undefined') {
      return <StaticRouter location="/">{children}</StaticRouter>;
    }

    return <MemoryRouter>{children}</MemoryRouter>;
  }

  Router.propTypes = {
    children: PropTypes.node,
  };

  const theme = createTheme({
    components: {
      MuiLink: {
        defaultProps: {
          component: LinkBehavior,
        },
      },
      MuiButtonBase: {
        defaultProps: {
          LinkComponent: LinkBehavior,
        },
      },
    },
  });

  const { i18n } = useTranslation();

  function switchLanguage() {
    if (i18n.language=="fr") {
      i18n.changeLanguage("en")
    } else {
      i18n.changeLanguage("fr")
    }
  }

  return (

    <AppBar position="static" color="success">
      <Container maxWidth="xl" color="#43A047">
        <Toolbar disableGutters>

          <Box sx={{ flexGrow: 5, display: { xs: 'flex', s: 'flex', md: 'none' } }}>
          <Tooltip title="Open settings">
              <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
              </IconButton>

            </Tooltip>

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
                display: { xs: 'block', s: 'block', md: 'none' },
              }}
            >

                <MenuItem>

                  <Router>
                      <Stack spacing={2}>
                        <Button href="/calendar" color="success" target="_self" variant="text">
                        {t("Calendar")}
                        </Button>
                        <Button href="/venueinfo" color="success" target="_self" variant="text">
                        {t("Venueinfo")}
                        </Button>
                        <Button href="/dashboards" color="success" target="_self" variant="text">
                        {t("dashboards")}
                        </Button>
                        <Button href="/faq" color="success" target="_self" variant="text">
                        {t("Help")}
                        </Button>

                        </Stack>
                    </Router>
                </MenuItem>

            </Menu>
          </Box>
          



        {/*  <Grid container alignItems="center" justifyContent="center" sx={{ display: { xs: 'flex', s: 'flex', md: 'none' } }}>
            <Grid item sx={4}>
           <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', s: 'flex', md: 'none' },
              flexGrow: 1,
              align: 'center',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {pageTitle}

          </Typography>
             </Grid>
          </Grid>*/}


          <Box sx={{ flexGrow: 5, display: { xs: 'none', md: 'flex'} }}>

            <ButtonGroup spacing={2} direction="row" color= "success" variant="contained" aria-label="outlined primary button group">
                <ThemeProvider theme={theme}>
                    <Router>
                    <Button href="/calendar" color="success" target="_top" variant="contained" sx={buttonSX}>
                        {t("Calendar")}
                        </Button>
                        <Button href="/venueinfo" color="success" target="_top" variant="contained" sx={buttonSX}>
                        {t("Venueinfo")}
                        </Button>
                        <Button href="/dashboards" color="success" target="_top" variant="contained" sx={buttonSX}>
                        {t("dashboards")}
                        </Button>
                        <Button href="/faq" color="success" target="_top" variant="contained" sx={buttonSX}>
                        {t("Help")}
                        </Button>
                    </Router>

{/* Home and Today's Events icons */}
      </ThemeProvider>
      </ButtonGroup>
          </Box>

          <Box>
            <Tooltip title="Go back Home">
            <Button sx={buttonSX}
                href="/"
                size="large"
                aria-label="home"
                aria-haspopup="true"
                color="inherit"
                textAlign="right"
              >
                <Home/>
              </Button>
            </Tooltip>
            <Tooltip title="Today's events">
            <Button sx={buttonSX}
                href="/"
                size="large"
                aria-label="home"
                aria-haspopup="true"
                color="inherit"
                textAlign="right"
              >
                <Today/>
              </Button>
            </Tooltip>
          </Box>
          <Button sx={{color: "#FFFFFF", display: {xs: 'none', md: 'flex'}}} variant="text" onClick={switchLanguage}>{t("langSwitch")}</Button>
          <Button sx={{color: "#FFFFFF", display: {xs: 'flex', md: 'none'}}} variant="text" onClick={switchLanguage}>{t("langSwitchShort")}</Button>
        </Toolbar>
      </Container>
    </AppBar>

  );
}

export default ResponsiveAppBar;
