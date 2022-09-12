import React, { useState, useEffect, useContext } from 'react'
import { appStore, onAppMount } from '../../state/app'
import MicrosoftLoginButton from '../common/MicrosoftLogInButton/microsoftLoginButton'
import ImageLoader from '../common/ImageLoader/imageLoader'
import { useMsal, AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";

// Material UI Components
import { css, keyframes } from "@emotion/react"
import Grid from '@mui/material/Grid'
import { useTheme } from "@mui/material/styles"
import useMediaQuery from '@mui/material/useMediaQuery'
import MicrosoftLogoutButton from '../common/MicrosoftLogOutButton/microsoftLogoutButton'

const myEffect = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-200%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;
const myEffectExit = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-200%);
  }
`;

const armyDarkLogo = require('../../img/ca-header-dark.png')

const logoStyle = {
    maxWidth: '90%'
}

const desktopLogoStyle = {
  maxWidth: '50%'
}

export default function Splash (props) {

  const matches = useMediaQuery('(max-width:500px)')
  const { state, update } = useContext(appStore)


  const theme = useTheme()
  const animatedItem = css`
    animation: ${myEffect} 3000ms ${theme.transitions.easing.easeInOut};
  `;
  const animatedItemExiting = css`
    animation: ${myEffectExit} 3000ms ${theme.transitions.easing.easeInOut};
    opacity: 0;
    transform: translateY(-200%);
  `;
  const [exit, setExit] = useState(false)
  
  const { accounts } = useMsal();
  
  useEffect(() => {
    update('', {microsoftAccount: accounts})
  }, [accounts])

    return(
    <>
    {!matches ?
          <Grid container justifyContent="center" alignItems="center" spacing={0}>
              
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center" 
              sx={{
                width: '95%',
                height: 'auto',
                position: 'fixed',
                top: '40%'
              }}
            >
              <ImageLoader image={armyDarkLogo} style={desktopLogoStyle} css={exit ? animatedItemExiting : animatedItem}/>
            </Grid>
          
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center" 
              sx={{
                position: 'absolute',
                bottom: 0,
                height: '50px',
                width: '90%'
              }}
            >
              <AuthenticatedTemplate>
                <MicrosoftLogoutButton />
              </AuthenticatedTemplate>

              <UnauthenticatedTemplate>
                  <MicrosoftLoginButton />
              </UnauthenticatedTemplate>

            </Grid>

          </Grid>
        :
            <Grid container justifyContent="center" alignItems="center" spacing={0} >
          
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center"
                  sx={{
                    width: '95%',
                    height: 'auto',
                    position: 'fixed',
                    top: '40%'
                  }}
                >
                  <ImageLoader image={armyDarkLogo} style={logoStyle} css={exit ? animatedItemExiting : animatedItem}/>
                </Grid>
               
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center" 
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    height: '50px',
                    width: '90%'
                  }}
                >
                  <AuthenticatedTemplate>
                    <MicrosoftLogoutButton />
                  </AuthenticatedTemplate>

                  <UnauthenticatedTemplate>
                      <MicrosoftLoginButton />
                  </UnauthenticatedTemplate>

                </Grid>
            </Grid>
    }
    </>
    )
}