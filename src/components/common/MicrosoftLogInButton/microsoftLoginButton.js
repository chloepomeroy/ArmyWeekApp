import React from 'react'

import { useMsal } from "@azure/msal-react"
import { useTranslation } from "react-i18next"

// Material UI components
import Button from '@mui/material/Button'
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone'
import useMediaQuery from '@mui/material/useMediaQuery'

export default function MicrosoftLoginButton(props) {

    const { instance } = useMsal()
    const { t, i18n } = useTranslation()
    const matches = useMediaQuery('(max-width:500px)')

    function signInClickHandler(instance) {
      instance.loginRedirect();
    }

    return (
        <>
        {!matches ?
          <Button
          variant="contained"
          disableFocusRipple
          sx={{ 
            color: 'white', 
            backgroundColor: 'black', 
            borderColor: 'black',
            width: '30%',
            fontSize: '16px',
            "&.active": {
              backgroundColor: '#58714C'
            }
          }}
          startIcon={<LockOpenTwoToneIcon />}
          onClick={() => signInClickHandler(instance)}
          >{t("sign_in")}</Button>
        :
          <Button
          variant="contained"
          disableFocusRipple
          sx={{ 
            color: 'white', 
            backgroundColor: 'black', 
            borderColor: 'black',
            width: '90%',
            fontSize: '16px',
            "&.active": {
              backgroundColor: '#58714C'
            } 
          }}
          startIcon={<LockOpenTwoToneIcon />}
          onClick={() => signInClickHandler(instance)}
          >{t("sign_in")}</Button>
        }
      </>
    )
}