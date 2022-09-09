import React, { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useTranslation } from "react-i18next"
import PropTypes from 'prop-types';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade'
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Typography } from '@mui/material';
import caLogo from '../../../img/ca-header-dark.png'
import LiveHelpIcon from '@mui/icons-material/LiveHelp'
import Button from '@mui/material/Button'

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 66, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function HeaderMenu(props) {
    
    let history = useHistory()
    let location = useLocation()

    const { t, i18n } = useTranslation()

    const {
        signedIn
    } = props

    function switchLanguage() {
      if (i18n.language=="fr") {
        i18n.changeLanguage("en")
      } else {
        i18n.changeLanguage("fr")
      }
    }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar style={{backgroundColor: '#58714C', boxShadow: 'none'}}>
        <Toolbar>
        {signedIn && location.pathname == '/' ? <>
            <Link to="/settings" style={{color: 'white'}}><SettingsIcon color="white" /></Link>
            <img src={caLogo} style={{height: '50px', width: 'auto', position: 'absolute', top: 4, left: '50%', marginLeft: '-80px'}}/>
            <Button
          sx={{color: "#FFFFFF", display: {xs: 'none', md: 'flex'}}} variant="text" onClick={switchLanguage}>{t("langSwitch")}
           </Button>
          <Button sx={{color: "#FFFFFF", display: {xs: 'flex', md: 'none'}}} variant="text" onClick={switchLanguage}>{t("langSwitchShort")}</Button>
          <LiveHelpIcon style={{color: 'white', height: '25px', width: 'auto', position: 'absolute', top: 13, right: '2%'}} />
            </> : null
        }
        {!signedIn && location.pathname == '/' ? <>
            <Typography variant="h5" style={{height: '50px', width: 'auto', position: 'absolute', top: 4, left: '50%', marginLeft: '-110px'}}>
              Strong, Proud, Ready
            </Typography>
            </> : null
        }
        {signedIn && location.pathname == '/settings' ? <>
            <ArrowBackIcon color="white" style={{marginRight: '30px'}} onClick={history.goBack} />
            <Typography variant="h5">Settings</Typography></>: null
        }
        {signedIn && location.pathname == '/calendar' ? <>
            <ArrowBackIcon color="white" style={{marginRight: '30px'}} onClick={history.goBack} />
            <Typography variant="h5">Calendar</Typography></>: null
        }
        {signedIn && location.pathname == '/venue' ? <>
            <ArrowBackIcon color="white" style={{marginRight: '30px'}} onClick={history.goBack} />
            <Typography variant="h5">Venue Info</Typography></>: null
        }
        {signedIn && location.pathname == '/dashboards' ? <>
          <ArrowBackIcon color="white" style={{marginRight: '30px'}} onClick={history.goBack} />
          <Typography variant="h5">Dashboards</Typography></>: null
        }
        {signedIn && location.pathname == '/support' ? <>
          <ArrowBackIcon color="white" style={{marginRight: '30px'}} onClick={history.goBack} />
          <Typography variant="h5">Support</Typography>
          <Button
          sx={{color: "#FFFFFF", display: {xs: 'none', md: 'flex'}}} variant="text" onClick={switchLanguage}>{t("langSwitch")}
           </Button>
          <Button sx={{color: "#FFFFFF", display: {xs: 'flex', md: 'none'}}} variant="text" onClick={switchLanguage}>{t("langSwitchShort")}</Button>
          <LiveHelpIcon style={{color: 'white', height: '50px', width: 'auto', position: 'absolute', top: 4, right: '2%'}} />
          </>: null
        }
        {signedIn && location.pathname == '/resources' ? <>
          <ArrowBackIcon color="white" style={{marginRight: '30px'}} onClick={history.goBack} />
          <Typography variant="h5">Resources</Typography>
          <Button
          sx={{color: "#FFFFFF", display: {xs: 'none', md: 'flex'}}} variant="text" onClick={switchLanguage}>{t("langSwitch")}
           </Button>
          <Button sx={{color: "#FFFFFF", display: {xs: 'flex', md: 'none'}}} variant="text" onClick={switchLanguage}>{t("langSwitchShort")}</Button>
          <LiveHelpIcon style={{color: 'white', height: '50px', width: 'auto', position: 'absolute', top: 4, right: '2%'}} />
          </>: null
        }
        
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />     
    </React.Fragment>
  );
}
