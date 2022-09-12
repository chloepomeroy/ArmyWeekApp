import React, { useEffect, useState, useContext } from "react"
import { useTranslation } from "react-i18next"
import { appStore, onAppMount } from '../../state/app'

// Styling
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import BusinessIcon from '@mui/icons-material/Business'
import AssessmentIcon from '@mui/icons-material/Assessment';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import FeedbackIcon from '@mui/icons-material/Feedback'
import Box from '@mui/material/Box'

//const browser = typeof window !== "undefined" && window;

export default function IndexPage(props) {

  const [name, setName] = useState('Welcome')

  const { t, i18n } = useTranslation()
  const { state, update } = useContext(appStore)

  const {
    rank,
    surName
  } = state

  useEffect(() => {
    if(rank && surName){
      setName('Welcome' +  ' ' + rank +' '+ surName)
    }
  }, [rank, surName]
  )

  return(

    <Box sx={{ width: '100%', height: '100vh', bgcolor: '#58714C', marginTop: '40px' }}>
          <Grid container spacing={3} justifyContent="space-around" alignItems="center">

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center" style={{marginTop: '30px'}}>
              <Typography variant="h4" style={{color: 'white'}}>
              {t("index")}
              </Typography><br></br>
              {name ? <Typography variant="body1" style={{color: 'whitesmoke'}}>{name}</Typography> : null }
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center" style={{flexBasis: 'unset', marginTop: '30px'}}>
              <Stack direction="row" spacing={2}>
                <Button href="/calendar" variant="extended" style={{flexDirection: 'column', minWidth: '136px', border: '1px solid whitesmoke'}}>
                  <CalendarMonthIcon style={{fontSize: 'xxx-large', color: 'white'}} />
                  <Typography variant="body1" style={{color: 'white'}}  >
                  {t("agenda")}
                  </Typography>
                </Button>
                <Button href="/venue" variant="extended" style={{flexDirection: 'column', minWidth: '136px', border: '1px solid whitesmoke'}}>
                  <BusinessIcon style={{fontSize: 'xxx-large', color: 'white'}} />
                  <Typography variant="body1" style={{color: 'white'}}  >
                  {t("venueInfo")}
                  </Typography>
                </Button>
              </Stack>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center" style={{flexBasis: 'unset', marginTop: '30px'}}>
              <Stack direction="row" spacing={2}>
              <Button href="/dashboards" variant="outlined" style={{flexDirection: 'column', minWidth: '136px', border: '1px solid whitesmoke'}}>
                  <AssessmentIcon style={{fontSize: 'xxx-large', color: 'white'}} />
                  <Typography variant="body1" style={{color: 'white'}}  >
                  {t("dashboards")}
                  </Typography>
                </Button>
                <Button href="/support" variant="outlined" style={{flexDirection: 'column', minWidth: '136px', border: '1px solid whitesmoke'}}>
                  <LiveHelpIcon style={{fontSize: 'xxx-large', color: 'white'}} />
                  <Typography variant="body1" style={{color: 'white'}}  >
                  {t("help")}
                  </Typography>
                </Button>
              </Stack>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center" style={{flexBasis: 'unset', marginTop: '30px'}}>
              <Stack direction="row" spacing={2}>
              <Button href="/resources" variant= "text" style={{flexDirection: 'column', minWidth: '136px', border: '1px solid whitesmoke'}}>
                  <CoPresentIcon style={{fontSize: 'xxx-large', color: 'white'}} />
                  <Typography variant="body1" style={{color: 'white'}}  >
                  {t("resources")}
                  </Typography>
                </Button>
                <Button href="https://forms.office.com/Pages/ResponsePage.aspx?id=lERbMocV1UC7MYtmC38QODzdx7cisApLkhdgt3T7SERUMk1LQVdKNExWM0tFQkFNTU8zNjU2MEhRUC4u" variant= "text" style={{flexDirection: 'column', minWidth: '136px', border: '1px solid whitesmoke'}}>
                  <FeedbackIcon style={{fontSize: 'xxx-large', color: 'white'}} />
                  <Typography variant="body1" style={{color: 'white'}}  >
                  {t("feedback")}
                  </Typography>
                </Button>
              </Stack>
            </Grid>
          </Grid>
    </Box>
  )
}