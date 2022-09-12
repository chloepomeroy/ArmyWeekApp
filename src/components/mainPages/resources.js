import React from "react"
import { useTranslation } from "react-i18next"

//Components
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

// Dashboard Images
import digitalPlacemat from '../../img/armyweekregss.jpg'
import finUpdate from '../../img/fin-update.png'
import armyWeekOrder from '../../img/army-week-order.png'
import camsAnnual from '../../img/cams-annual.png'
import DASIntro from '../../img/DAS-Intro-Slides.png'
import dpuUpdate from '../../img/dpu-update.png'
import F2025 from '../../img/F2025.png'
import FTSEEN from '../../img/ftse-en.png'
import FTSEFR from '../../img/ftse-fr.png'
import ITCT from '../../img/it-ct-blend.png'
import DefenceX from '../../img/defencex.png'
import DataGov from '../../img/data-governance.png'

export default function Resources() {

    const { t, i18n } = useTranslation();

    return (
        <Box sx={{ width: '100%', height: '100vh', bgcolor: 'white', marginTop: '50px', paddingTop: '30px'  }}>
        <Grid container alignItems="center" justifyContent="center">
            <Stack direction="column"  justifyContent="center" alignItems="center" spacing={3} style={{maxWidth: '90%', marginBottom: '76px'}}>
                <Typography variant="h4">Army Council Presentations</Typography>
                <Card sx={{ maxWidth: '98%' }}>
                    <CardContent align="left">
                        <img src={DASIntro} alt="DAS Intro Slides" style={{maxWidth: '98%'}} />
                        <Typography variant="h5">
                            DAS Intro Slides
                        </Typography>
                        <Typography variant="body1">
                           Ser 1: 13 0830-0850 Sep 22
                        </Typography>
                    </CardContent>
                    <CardActionArea>
                        <CardActions>
                            <a href="https://caarmydata.blob.core.windows.net/resources/01%20-%20AC%2022-04%20DAS%20Intro%20Slides.pdf">
                                <Typography variant="overline">
                                    view
                                </Typography>
                            </a>
                        </CardActions>
                    </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: '98%' }}>
                    <CardContent align="left">
                        <img src={finUpdate} alt="Business Planning and Risk" style={{maxWidth: '98%'}} />
                        <Typography variant="h5">
                            Business Planning and Risk
                        </Typography>
                        <Typography variant="body1">
                           Ser 5: 13 1035-1105 Sep 22
                        </Typography>
                    </CardContent>
                    <CardActionArea>
                        <CardActions>
                            <a href="https://caarmydata.blob.core.windows.net/resources/DAS%202%20-%20Army%20Council%20Brief%20(Sep%2022).pdf">
                                <Typography variant="overline">
                                    view
                                </Typography>
                            </a>
                        </CardActions>
                    </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: '98%' }}>
                    <CardContent align="left">
                        <img src={camsAnnual} alt="CAMS Annual Report" style={{maxWidth: '98%'}} />
                        <Typography variant="h5">
                            CAMS Annual Report
                        </Typography>
                        <Typography variant="body1">
                           Ser 6-8: 13 1105-1345 Sep 22
                        </Typography>
                    </CardContent>
                    <CardActionArea>
                        <CardActions>
                            <a href="https://caarmydata.blob.core.windows.net/resources/20220913-U-DAS4-AC_CAMS_Annual_Report.pdf">
                                <Typography variant="overline">
                                    view
                                </Typography>
                            </a>
                        </CardActions>
                    </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: '98%' }}>
                    <CardContent align="left">
                        <img src={ITCT} alt="Reconstitution" style={{maxWidth: '98%'}} />
                        <Typography variant="h5">
                            Reconstitution (IT/CT Blend)
                        </Typography>
                        <Typography variant="body1">
                           Ser 9: 13 1345-1445 Sep 22
                        </Typography>
                    </CardContent>
                    <CardActionArea>
                        <CardActions>
                            <a href="https://caarmydata.blob.core.windows.net/resources/CA%20IT%20CT%20Blend%20Placemat_9%20Sep%202022%20v3.pdf">
                                <Typography variant="overline">
                                    view
                                </Typography>
                            </a>
                        </CardActions>
                    </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: '98%' }}>
                    <CardContent align="left">
                        <img src={F2025} alt="Force 2025" style={{maxWidth: '98%'}} />
                        <Typography variant="h5">
                            Force 2025
                        </Typography>
                        <Typography variant="body1">
                           Ser 10-12: 13 1445-1615 Sep 22
                        </Typography>
                    </CardContent>
                    <CardActionArea>
                        <CardActions>
                            <a href="https://caarmydata.blob.core.windows.net/resources/CA%20IT%20CT%20Blend%20Placemat_9%20Sep%202022%20v3.pdf">
                                <Typography variant="overline">
                                    view
                                </Typography>
                            </a>
                        </CardActions>
                    </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: '98%' }}>
                    <CardContent align="left">
                        <img src={FTSEEN} alt="FTSE Results English" style={{maxWidth: '98%'}} />
                        <Typography variant="h5">
                            FTSE Results (English)
                        </Typography>
                        <Typography variant="body1">
                           Ser 13: 13 1445-1615 Sep 22
                        </Typography>
                    </CardContent>
                    <CardActionArea>
                        <CardActions>
                            <a href="https://caarmydata.blob.core.windows.net/resources/FTSE%20Update%20for%20AC%20-%202022_EN.pdf">
                                <Typography variant="overline">
                                    view
                                </Typography>
                            </a>
                        </CardActions>
                    </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: '98%' }}>
                    <CardContent align="left">
                        <img src={FTSEFR} alt="FTSE Results French" style={{maxWidth: '98%'}} />
                        <Typography variant="h5">
                            FTSE Results (French)
                        </Typography>
                        <Typography variant="body1">
                           Ser 13: 13 1445-1615 Sep 22
                        </Typography>
                    </CardContent>
                    <CardActionArea>
                        <CardActions>
                            <a href="https://caarmydata.blob.core.windows.net/resources/FTSE%20Update%20for%20AC%20-%202022_FR.pdf">
                                <Typography variant="overline">
                                    view
                                </Typography>
                            </a>
                        </CardActions>
                    </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: '98%' }}>
                    <CardContent align="left">
                        <img src={dpuUpdate} alt="Defence Policy Update" style={{maxWidth: '98%'}} />
                        <Typography variant="h5">
                            Defence Policy Update
                        </Typography>
                        <Typography variant="body1">
                           Ser 17: 14 0840-0940 Sep 22
                        </Typography>
                    </CardContent>
                    <CardActionArea>
                        <CardActions>
                            <a href="https://caarmydata.blob.core.windows.net/resources/20220902-UU-3120-CA_HQ_DLFD-AC_Sep_22-DPU.BIL.pdf">
                                <Typography variant="overline">
                                    view
                                </Typography>
                            </a>
                        </CardActions>
                    </CardActionArea>
                </Card>

            <Typography variant="h4">Placemats</Typography>

                <Card sx={{ maxWidth: '98%' }}>
                    <CardContent align="left">
                        <img src={digitalPlacemat} alt="1st floor" style={{maxWidth: '98%'}} />
                        <Typography variant="h5">
                            Digital Training, Solutions, and Policies
                        </Typography>
                        <Typography variant="body1">
                            Digital and data training opportunities for CA Defence Team members, solutions, and relevant policies.
                        </Typography>
                    </CardContent>
                    <CardActionArea>
                        <CardActions>
                            <a href="https://caarmydata.blob.core.windows.net/resources/CA%20Digital%20Placemat%20BIL.pdf">
                                <Typography variant="overline">
                                    view
                                </Typography>
                            </a>
                        </CardActions>
                    </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: '98%' }}>
                    <CardContent align="left">
                        <img src={DataGov} alt="CA Data Governance" style={{maxWidth: '98%'}} />
                        <Typography variant="h5">
                            CA Data Governance Framework
                        </Typography>
                        <Typography variant="body1">
                            Nested in the ADM(DIA) Data Governance Framework, this is how the CA is addressing Data Governance.
                        </Typography>
                    </CardContent>
                    <CardActionArea>
                        <CardActions>
                            <a href="https://caarmydata.blob.core.windows.net/resources/20211207-U-CA_Data_Governance.pdf">
                                <Typography variant="overline">
                                    view
                                </Typography>
                            </a>
                        </CardActions>
                    </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: '98%' }}>
                    <CardContent align="left">
                        <img src={DataGov} alt="CA Data Governance" style={{maxWidth: '98%'}} />
                        <Typography variant="h5">
                            Defence X (formerly DRMIS Mod)
                        </Typography>
                        <Typography variant="body1">
                            An overview of the Defence-X projects, scope, and timeline.
                        </Typography>
                    </CardContent>
                    <CardActionArea>
                        <CardActions>
                            <a href="https://caarmydata.blob.core.windows.net/resources/20220121-UNCLASS-DefenceX_Placemat.pdf">
                                <Typography variant="overline">
                                    view
                                </Typography>
                            </a>
                        </CardActions>
                    </CardActionArea>
                </Card>

            <Typography variant="h4">Orders and Directives</Typography>

                <Card sx={{ maxWidth: '98%' }}>
                    <CardContent align="left">
                        <img src={armyWeekOrder} alt="Army Week Order" style={{maxWidth: '98%'}} />
                        <Typography variant="h5">
                            Army Week 2022 Order
                        </Typography>
                        <Typography variant="body1">
                            Complete order for Army Week (Bilingual)
                        </Typography>
                    </CardContent>
                    <CardActionArea>
                        <CardActions>
                            <a href="https://caarmydata.blob.core.windows.net/resources/202200815_1110-1_DAS_U_Army_Week_2022_Operation_Order_Bil.pdf">
                                <Typography variant="overline">
                                    view
                                </Typography>
                            </a>
                        </CardActions>
                    </CardActionArea>
                </Card>

              

            </Stack>
        </Grid>
        </Box>
    )
}