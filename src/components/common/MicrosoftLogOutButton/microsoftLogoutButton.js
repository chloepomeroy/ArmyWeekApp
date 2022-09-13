import React from 'react'
import { useMsal } from "@azure/msal-react";

// Material UI components
import Button from '@mui/material/Button'
import LockTwoToneIcon from '@mui/icons-material/LockOpenTwoTone'

export default function MicrosoftLogoutButton(props) {

    const { instance } = useMsal()
   
    function signOutClickHandler(instance) {
      const logoutRequest = {
          account: instance.getActiveAccount(),
      }
      instance.logoutRedirect(logoutRequest);
    }
    
    return (
        <> 
        <Button
        variant="contained"
        color="primary"
        sx={{
          width: '90%',
          fontSize: '16px'
        }}
        startIcon={<LockTwoToneIcon />}
        onClick={() => signOutClickHandler(instance)} 
        >Sign Out</Button>
           
      </>
    )
}