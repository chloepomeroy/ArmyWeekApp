import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import { useTranslation } from "react-i18next"

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Typography } from '@mui/material';
import caLogo from '../../../img/ca-header-dark.png'
import LiveHelpIcon from '@mui/icons-material/LiveHelp'
import Button from '@mui/material/Button'

export default function HeaderMenu(props) {
    
    let navigate = useNavigate()
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

    const Buttons = (<>
      <Button sx={{color: "#FFFFFF", position: 'absolute', top: 8, right: '55px', display: {xs: 'none', md: 'flex'}}} variant="text" onClick={switchLanguage}>
        {t("langSwitch")}
      </Button>
      <Button sx={{color: "#FFFFFF", position: 'absolute', top: 8, right: '35px', display: {xs: 'flex', md: 'none'}}} variant="text" onClick={switchLanguage}>
        {t("langSwitchShort")}</Button>
      <LiveHelpIcon onClick={() => navigate("/support")} style={{color: 'white', height: '25px', width: 'auto', position: 'absolute', top: 13, right: '5px'}} />
      </>
    )

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar style={{backgroundColor: '#58714C'}}>
        <Toolbar>
        {signedIn && location.pathname == '/' ? <>
            <SettingsIcon color="white" onClick={()=> navigate("/settings")} />
            <img src={caLogo} style={{height: '50px', width: 'auto', position: 'absolute', top: 4, left: '50%', marginLeft: '-80px'}}/>
            {Buttons}
            </> : null}
        {!signedIn && location.pathname == '/' ? <>
            <Typography variant="h5" style={{height: '50px', width: 'auto', position: 'absolute', color: 'white', top: 10, left: '50%', marginLeft: '-110px'}}>
              {t("strong_proud_ready")}
            </Typography>
            </> : null
        }
        {signedIn && location.pathname == '/settings' ? <>
            <ArrowBackIcon color="white" style={{marginRight: '30px'}} onClick={() => navigate(-1)} />
            <Typography variant="h5" style={{color: 'white'}}>
              {t("settings")}
            </Typography>
            {Buttons}
            </>: null
        }
        {signedIn && location.pathname == '/calendar' ? <>
            <ArrowBackIcon color="white" style={{marginRight: '30px'}} onClick={() => navigate(-1)} />
            <Typography variant="h5" style={{color: 'white'}}>
              {t("calendar")}
            </Typography>
            {Buttons}
            </>: null
        }
        {signedIn && location.pathname == '/venue' ? <>
            <ArrowBackIcon color="white" style={{marginRight: '30px'}} onClick={() => navigate(-1)} />
            <Typography variant="h5" style={{color: 'white'}}>
              {t("venueInfo")}
            </Typography>
            {Buttons}
            </>: null
        }
        {signedIn && location.pathname == '/dashboards' ? <>
          <ArrowBackIcon color="white" style={{marginRight: '30px'}} onClick={() => navigate(-1)} />
          <Typography variant="h5" style={{color: 'white'}}>
            {t("dashboards")}
          </Typography>
          {Buttons}
          </>: null
        }
        {signedIn && location.pathname == '/support' ? <>
          <ArrowBackIcon color="white" style={{marginRight: '30px'}} onClick={() => navigate(-1)} />
          <Typography variant="h5" style={{color: 'white'}}>
            {t("support")}
          </Typography>
          {Buttons}
          </>: null
        }
        {signedIn && location.pathname == '/resources' ? <>
          <ArrowBackIcon color="white" style={{marginRight: '30px'}} onClick={() => navigate(-1)} />
          <Typography variant="h5" style={{color: 'white'}}>
            {t("resources")}
          </Typography>
          {Buttons}
          </>: null
        }
        {signedIn && location.pathname.includes('/event') ? <>
          <ArrowBackIcon color="white" style={{marginRight: '30px'}} onClick={() => navigate(-1)} />
          <Typography variant="h5" style={{color: 'white'}}>
            {t("event_details")}
          </Typography>
          {Buttons}
        </>: null
      }
        
      </Toolbar>
      </AppBar> 
    </React.Fragment>
  );
}
