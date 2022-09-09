import * as React from "react"

import { Link, navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

// import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import ResponsiveAppBar from "../components/Navbar/navbar";

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import BusinessIcon from '@mui/icons-material/Business'
import AssessmentIcon from '@mui/icons-material/Assessment';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { t} from "i18next";
import { useTranslation } from "react-i18next";



const browser = typeof window !== "undefined" && window;

// const {t} = useTranslation()

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


const moreLinks = [

]
const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

export default function IndexPage(props) {
  const { i18n } = useTranslation();
  return(
    browser && (
      <Grid>
      <ResponsiveAppBar pageTitle={t("index")}/>
        <Seo title="Home" />

        <div className={styles.textCenter}>
          <StaticImage
                      sx={{
                        height: 64,
                        }}
            src="../images/army-week-logo-black-font.jpg"
            loading="eager"
            width={350}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginTop: `var(--space-1)`, marginLeft: '-12px'}}
          />

          {/* <h1>
          <b> Welcome to Army Week</b>
          </h1> */}

          {/* <p className={styles.intro}>
          {" "}
            {samplePageLinks.map((link, i) => (
              <React.Fragment key={link.url}>
                <Link to={link.url}>{link.text}</Link>
                {i !== samplePageLinks.length - 1 && <> · </>}
              </React.Fragment>
            ))}
          </p> */}

          <Stack direction = "row" spacing={4} justifyContent="space-evenly"
          sx= {{display: {xs: 'flex', md: 'none'}}}>
            </Stack>
          <Grid container spacing={5} justifyContent="center" alignItems="center">

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{flexBasis: 'unset', marginTop: '30px'}}>
              <Button variant="outlined" style={{flexDirection: 'column', minWidth: '136px', border: '1.0px whitesmoke'}} onClick={() => navigate("/calendar")}>
                <CalendarMonthIcon style={{fontSize: 'xxx-large', color: 'green'}} />
                <Typography variant="body" style={{color: 'black'}}  >
                  {t("Calendar")}
                </Typography>
              </Button>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{flexBasis: 'unset', marginTop: '30px'}}>
              <Button variant="outlined" style={{flexDirection: 'column', minWidth: '136px', border: '1.0px whitesmoke'}} onClick={() => navigate("/venueinfo")}>
                <BusinessIcon style={{fontSize: 'xxx-large', color: 'green'}} />
                <Typography variant="body" style={{color: 'black'}}  >
                  {t("Venueinfo")}
                </Typography>
              </Button>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{flexBasis: 'unset', marginTop: '30px'}}>
              <Button variant="outlined" style={{flexDirection: 'column', minWidth: '136px', border: '1.0px whitesmoke'}} onClick={() => navigate("/dashboards")}>
                <AssessmentIcon style={{fontSize: 'xxx-large', color: 'green'}} />
                <Typography variant="body" style={{color: 'black'}}  >
                  {t("dashboards")}
                </Typography>
              </Button>
            </Grid>



            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{flexBasis: 'unset', marginTop: '30px'}}>
              <Button variant="outlined" style={{flexDirection: 'column', minWidth: '136px', border: '1.0px whitesmoke'}} onClick={() => navigate("/dashboards")}>
                <CoPresentIcon style={{fontSize: 'xxx-large', color: 'green'}} />
                <Typography variant="body" style={{color: 'black'}}  >
                  {t("Presentations")}
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{flexBasis: 'unset', marginTop: '30px'}}>
              <Button variant="outlined" style={{flexDirection: 'column', minWidth: '136px', border: '1.0px whitesmoke'}} onClick={() => navigate("/faq")}>
                <LiveHelpIcon style={{fontSize: 'xxx-large', color: 'green'}} />
                <Typography variant="body" style={{color: 'black'}}  >
                  {t("Help")}
                </Typography>
              </Button>
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
