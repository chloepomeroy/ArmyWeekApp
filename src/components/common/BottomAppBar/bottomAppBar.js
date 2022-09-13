import React, { useState, useEffect, useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import MainMenu from '../MainMenu/mainMenu'
import leaf from '../../../img/leaf-whitebg-tp.png'
import { useTranslation } from "react-i18next"
import { appStore, onAppMount } from '../../../state/app'

// Styling
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import Fab from '@mui/material/Fab'
import SearchIcon from '@mui/icons-material/Search'
import HomeIcon from '@mui/icons-material/Home'
import QueryStatsIcon from '@mui/icons-material/QueryStats'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Stack from '@mui/material/Stack'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import CoPresentIcon from '@mui/icons-material/CoPresent'

export default function BottomAppBar() {

  const [anchorEl, setAnchorEl] = useState(null)
  const [menuClicked, setMenuClicked] = useState(false)
  const [menuClickState, setMenuClickState] = useState(false)
  const [open, setOpen] = useState(false);

  const { state, update } = useContext(appStore)

  let navigate = useNavigate()
  let location = useLocation()

  const { t, i18n } = useTranslation()

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    view
  } = state

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        update('', {view: 'home'})
        break;
      case '/calendar':
        update('', {view: 'agenda'})
        break;
      case '/dashboards':
        update('', {view: 'dashboards'})
        break;
      case '/resources':
        update('', {view: 'resources'})
        break;
      case '/event':
        update('', {view: 'agenda'})
        break;
      default:
        update('', {view: 'home'})
        break;
    }
  }, [location.pathname])


  function handleExpanded() {
    setAnchorEl(null)
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleMenuClick = () => {
    handleExpanded()
    handleMenuClickState(true)
  }

  function handleMenuClickState(property){
    setMenuClicked(property)
  }

  const handleChange = (event, nextView) => {
    update('', {view: nextView})
  };
  
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" sx={{ top: 'auto', bottom: 0 , backgroundColor: 'white'}}>
        <Stack direction="row" spacing={4}>
          <ToggleButtonGroup
            color="primary"
            value={view}
            onChange={handleChange}
            aria-label="device"
            sx={{borderRadius: 0}}
            fullWidth
            exclusive
          >
            <ToggleButton value="home" onClick={() => navigate("/")} aria-label="agenda" style={{flexDirection: 'column', border:'none', borderRadius:'0px', width: '25%'}}>
                <HomeIcon style={{color: '#58714C'}} />
                <Typography variant="body1" style={{color: '#58714C', fontSize: '14px'}}>
                  {t("home")}
                </Typography>
            </ToggleButton>
            <ToggleButton value="agenda" onClick={() => navigate("/calendar")} aria-label="agenda" style={{flexDirection: 'column', border:'none', width: '25%', marginRight:'10px'}}>
                <CalendarMonthIcon style={{color: '#58714C'}} />
                <Typography variant="body1" style={{color: '#58714C', fontSize: '14px'}}>
                  {t("agenda")}
                </Typography>
            </ToggleButton>
            <ToggleButton value="nothing" aria-label="none" style={{flexDirection: 'column', border:'none', width: '0%'}}>
              <SearchIcon style={{color: 'white'}}/>
            </ToggleButton>
      
            <Fab sx={{
              position: 'absolute',
              width: '55px',
              height: '55px',
              zIndex: 1,
              top: -10,
              left: '50%',
              right: 0,
              margin: '0 auto',
              backgroundColor: '#798d6f',
              borderRadius: '50% !important', 
              marginLeft: '-27px !important'
            }}
            >
                <img src={leaf} style={{maxHeight: '40px'}} onClick={handleMenuClick} color="primary" alt="Main Menu" />
            </Fab>

            <ToggleButton value="dashboards" onClick={() => navigate("/dashboards")} aria-label="dashboards" style={{flexDirection: 'column', border:'none', width: '25%', marginLeft: '10px'}}>
                <QueryStatsIcon style={{color: '#58714C'}} />
                <Typography variant="body1" style={{color: '#58714C', fontSize: '14px'}}>
                  {t("info")}
                </Typography>
            </ToggleButton>
            <ToggleButton value="resources" onClick={() => navigate("/resources")} aria-label="resources" style={{flexDirection: 'column', border:'none', borderRadius:'0px', width: '25%'}}>
                <CoPresentIcon style={{color: '#58714C'}} />
                <Typography variant="body1" style={{color: '#58714C', fontSize: '14px'}}>
                  {t("resources")}
                </Typography>
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </AppBar>

      {menuClicked ? <MainMenu
        handleMenuClickState={handleMenuClickState}
      /> : null}

    </React.Fragment>
  )
    

  
}