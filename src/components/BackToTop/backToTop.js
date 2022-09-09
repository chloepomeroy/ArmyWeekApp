import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Zoom } from '@mui/material';
import { Color } from '@mui/material';

function ScrollTop(props) {
  const { children, window } = props;

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
      anchor.scrollIntoView({ behavior: 'smooth',
       block: 'center' });
    }
  };


  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed',
        bottom: 12,
        right: 15,
        zIndex: 1000,
       color: 'lightseagreen' }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

export default function BackToTop(props) {

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" style={{minHeight: '10px'}} />
      <Container>
        <Box sx={{ my: 2 }}>
          {[...new Array(12)]
            .map(
              () => ``,
            )
            .join('\n')}
        </Box>
      </Container>
      <ScrollTop {...props}>
        <Fab size="xxx-large"
         aria-label="scroll back to top"
         color='success'
                   sx={{ position: 'fixed',
        bottom: 15,
        right: 15,
        zIndex: 99,
        color: 'white'
         }}>
          <KeyboardArrowUpIcon

          />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
