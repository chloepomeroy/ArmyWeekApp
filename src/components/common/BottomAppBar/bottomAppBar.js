import React, { useState, useEffect, useContext } from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import MainMenu from '../MainMenu/mainMenu';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import HomeIcon from '@mui/icons-material/Home';
import leaf from '../../../img/leaf-whitebg-tp.png'
import brainBulb from '../../../img/brainbulbicon.png'
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Stack from '@mui/material/Stack';

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

const StyledFab = styled(Fab)({
  position: 'absolute',
  width: '55px',
  height: '55px',
  zIndex: 1,
  top: -10,
  left: '50%',
  right: 0,
  margin: '0 auto',
  backgroundColor: '#798d6f'
});

export default function BottomAppBar() {

  const [anchorEl, setAnchorEl] = useState(null)
  const [menuClicked, setMenuClicked] = useState(false)
  const [menuClickState, setMenuClickState] = useState(false)
  const [view, setView] = useState('home');

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function signOutClickHandler(instance) {
    const logoutRequest = {
        account: instance.getActiveAccount(),
        postLogoutRedirectUri: "/"
    }
    instance.logoutRedirect(logoutRequest);
  }

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
    setView(nextView);
  };

  // SignOutButton Component returns a button that invokes a popup login when clicked
  function SignOutButton() {
    // useMsal hook will return the PublicClientApplication instance you provided to MsalProvider
    const { instance } = useMsal();
    console.log('instance', instance)
    return <Button onClick={() => signOutClickHandler(instance)} variant="contained" style={{width:'90%', color: '#FFFFFF', fontSize: '16px'}}>Sign Out</Button>
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
            <ToggleButton value="home" aria-label="laptop" style={{flexDirection: 'column', border:'none', borderRadius:'0px'}}>
              <HomeIcon style={{color: '#58714C'}}/>
              <Typography variant="body1" style={{color: '#58714C', fontSize: '14px'}}>
                Home
              </Typography>
            </ToggleButton>
            <ToggleButton value="ideas" aria-label="laptop" style={{flexDirection: 'column', border:'none'}}>
              <EmojiObjectsIcon style={{color: '#58714C'}}/>
              <Typography variant="body1" style={{color: '#58714C', fontSize: '14px'}}>
                Ideas
              </Typography>
            </ToggleButton>
            <ToggleButton value="nothing" aria-label="laptop" style={{flexDirection: 'column', border:'none'}}>
              <SearchIcon style={{color: 'white'}}/>
            </ToggleButton>
      
            <StyledFab style={{borderRadius: '50%', marginLeft: '-27px'}}>
                <img src={leaf} style={{maxHeight: '40px'}} onClick={handleMenuClick} color="primary" alt="Main Menu" />
            </StyledFab>

            <ToggleButton value="search" aria-label="laptop" style={{flexDirection: 'column', border:'none'}}>
              <SearchIcon style={{color: '#58714C'}}/>
              <Typography variant="body1" style={{color: '#58714C', fontSize: '14px'}}>
                Search
              </Typography>
            </ToggleButton>
            <ToggleButton value="stats" aria-label="laptop" style={{flexDirection: 'column', border:'none', borderRadius:'0px'}}>
              <QueryStatsIcon style={{color: '#58714C'}} />
              <Typography variant="body1" style={{color: '#58714C', fontSize: '14px'}}>
                Stats
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