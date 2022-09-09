import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

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

const browser = typeof window !== "undefined" && window;

// const links = [
//   {
//     text: "Army Week on Sharepoint",
//  url: "https://acims.mil.ca/plan/AGM/Pages/welcome.aspx",
//     // description:
//     //   "Army Week on Sharepoint",
//   }
// ]

// const samplePageLinks = [
// { text: "Calendar", url: "calendar" },
// { text: "Venue info", url: "venueinfo"},
// { text: "Dashboards", url: "dashboards"},
// { text: "FAQ", url: "faq" },
// { text: "Presentations", url: "presentations"}
// ]


const moreLinks = []

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

export default function IndexPage(props) {

  const { t, i18n } = useTranslation()

  return(
    browser && (

          <Grid container spacing={3} justifyContent="space-around" alignItems="center">
            
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center" style={{marginTop: '30px'}}>
              <Typography variant="h4" style={{color: 'white'}}>
                Army Week 2022
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center" style={{flexBasis: 'unset', marginTop: '30px'}}>
              <Stack direction="row" spacing={2}>
                <Button component={Link} to="/calendar" variant="extended" style={{flexDirection: 'column', minWidth: '136px', border: '1px solid whitesmoke'}}>
                  <CalendarMonthIcon style={{fontSize: 'xxx-large', color: 'white'}} />
                  <Typography variant="body1" style={{color: 'white'}}  >
                  {t("agenda")}
                  </Typography>
                </Button>
                <Button component={Link} to="/venue" variant="extended" style={{flexDirection: 'column', minWidth: '136px', border: '1px solid whitesmoke'}}>
                  <BusinessIcon style={{fontSize: 'xxx-large', color: 'white'}} />
                  <Typography variant="body1" style={{color: 'white'}}  >
                  {t("venueInfo")}
                  </Typography>
                </Button>
              </Stack>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center" style={{flexBasis: 'unset', marginTop: '30px'}}>
              <Stack direction="row" spacing={2}>
              <Button component={Link} to="/dashboards" variant="outlined" style={{flexDirection: 'column', minWidth: '136px', border: '1px solid whitesmoke'}}>
                  <AssessmentIcon style={{fontSize: 'xxx-large', color: 'white'}} />
                  <Typography variant="body1" style={{color: 'white'}}  >
                  {t("dashboards")}
                  </Typography>
                </Button>
                <Button component={Link} to="/support" variant="outlined" style={{flexDirection: 'column', minWidth: '136px', border: '1px solid whitesmoke'}}>
                  <LiveHelpIcon style={{fontSize: 'xxx-large', color: 'white'}} />
                  <Typography variant="body1" style={{color: 'white'}}  >
                  {t("help")}
                  </Typography>
                </Button>
              </Stack>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center" style={{flexBasis: 'unset', marginTop: '30px'}}>
              <Stack direction="row" spacing={2}>
              <Button component={Link} to="/resources" variant= "text" style={{flexDirection: 'column', minWidth: '136px', border: '1px solid whitesmoke'}}>
                  <CoPresentIcon style={{fontSize: 'xxx-large', color: 'white'}} />
                  <Typography variant="body1" style={{color: 'white'}}  >
                  {t("resources")}
                  </Typography>
                </Button>
              </Stack>
            </Grid>
          </Grid>
    )
  )
}