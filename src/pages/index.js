import * as React from "react"
import LocalizedStrings from 'react-localization';

import { Link, navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import ResponsiveAppBar from "../components/Navbar/navbar_index";

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

let strings = new LocalizedStrings({
  en: {
    pagetitle: "ARMY WEEK 2022"
  },
  fr: {
    pagetitle: "SEMAINE DE L'ARMÉE 2022"
  }
})

const links = [
  {
    text: "Army Week on Sharepoint",
 url: "https://acims.mil.ca/plan/AGM/Pages/welcome.aspx",
    // description:
    //   "Army Week on Sharepoint",
  }
]

const samplePageLinks = [
{ text: "Calendar", url: "calendar" },
{ text: "Venue info", url: "venueinfo"},
{ text: "Dashboards", url: "dashboards"},
{ text: "FAQ", url: "faq" },
{ text: "Presentations", url: "presentations"}
]


const moreLinks = [

]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

export default function IndexPage(props) {
  return(
    browser && (
      <Grid>
      <ResponsiveAppBar pageTitle={strings? strings.pagetitle: null}/>
        <Seo title="Home" />

        <div className={styles.textCenter}>
          <StaticImage
            src="../images/army-week-logo-black-font.jpg"
            loading="eager"
            width={350}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginTop: `var(--space-1)`, marginLeft: '-12px'}}
          />

          <h1>
          <b> Welcome to Army Week</b>
          </h1>

          <p className={styles.intro}>
          {" "}
            {samplePageLinks.map((link, i) => (
              <React.Fragment key={link.url}>
                <Link to={link.url}>{link.text}</Link>
                {i !== samplePageLinks.length - 1 && <> · </>}
              </React.Fragment>
            ))}
          </p>
        
          <Grid container spacing={3} justifyContent="space-around" alignItems="center">
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center" style={{flexBasis: 'unset', marginTop: '30px'}}>
              <Stack direction="row" spacing={2}>
                <Button variant="outlined" style={{flexDirection: 'column', minWidth: '136px', border: '0.5px solid green'}} onClick={() => navigate("/calendar")}>
                  <CalendarMonthIcon style={{fontSize: 'xxx-large', color: 'green'}} />
                  <Typography variant="body1" style={{color: 'darkgreen'}}>
                    Agenda
                  </Typography>
                </Button>
                <Button variant="outlined" style={{flexDirection: 'column', minWidth: '136px', border: '0.5px solid green'}} onClick={() => navigate("/venueinfo")}>
                  <BusinessIcon style={{fontSize: 'xxx-large', color: 'green'}} />
                  <Typography variant="body1" style={{color: 'darkgreen'}}>
                    Venue Info
                  </Typography>
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center" style={{flexBasis: 'unset', marginTop: '30px'}}>
              <Stack direction="row" spacing={2}>
                <Button variant="outlined" style={{flexDirection: 'column', minWidth: '136px', border: '0.5px solid green'}} onClick={() => navigate("/dashboards")}>
                  <AssessmentIcon style={{fontSize: 'xxx-large', color: 'green'}} />
                  <Typography variant="body1" style={{color: 'darkgreen'}}>
                    Dashboards
                  </Typography>
                </Button>
                <Button variant="outlined" style={{flexDirection: 'column', minWidth: '136px', border: '0.5px solid green'}} onClick={() => navigate("/faq")}>
                  <LiveHelpIcon style={{fontSize: 'xxx-large', color: 'green'}} />
                  <Typography variant="body1" style={{color: 'darkgreen'}}>
                    Support
                  </Typography>
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center" style={{flexBasis: 'unset', marginTop: '30px'}}>
              <Stack direction="row" spacing={2}>
                <Button variant="outlined" style={{flexDirection: 'column', minWidth: '136px', border: '0.5px solid green'}} onClick={() => navigate("/dashboards")}>
                  <CoPresentIcon style={{fontSize: 'xxx-large', color: 'green'}} />
                  <Typography variant="body1" style={{color: 'darkgreen'}}>
                    Presentations
                  </Typography>
                </Button>
              </Stack>
            </Grid>
          </Grid>

        {/* <ul className={styles.intro}>
          {links.map(link => (
            <li key={link.url} className={styles.intro}>
              <a
                className={styles.listItemLink}
                href={`${link.url}${utmParameters}`}
              >
                {link.text} ↗
              </a>
              <p className={styles.listItemDescription}
              >{link.description}</p>
            </li>
          ))}
        </ul> */}
        </div>
        
        {moreLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <p className={styles.intro}></p>
            <a href={`${link.url}${utmParameters}`}
            >
              {link.text}
            </a>
            {i !== moreLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}

</Grid>
    )
)}

// const Head = () => <Seo title="Home" />
