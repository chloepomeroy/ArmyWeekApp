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
import awRegistrations from '../../img/armyweekregss.jpg'
import cams from '../../img/camsss.jpg'
import army101 from '../../img/army101ss.jpg'
import armyOrg from '../../img/orgstructss.jpg'
import bios from '../../img/CAGenOffss.jpg'

export default function Dashboards() {

    const { t, i18n } = useTranslation();

    return (
        <Box sx={{ width: '100%', height: '100vh', bgcolor: 'white', marginTop: '50px', paddingTop: '30px'  }}>
        <Grid container alignItems="center" justifyContent="center">
            <Stack direction="column"  justifyContent="center" alignItems="center" spacing={3} style={{maxWidth: '90%', marginBottom: '76px'}}>
                
                <Card sx={{ maxWidth: '98%' }}>
                    <CardContent align="left">
                        <img src={bios} alt="1st floor" style={{maxWidth: '98%'}} />
                        <Typography variant="h5">
                            Commander and Senior Leaders
                        </Typography>
                        <Typography variant="body1">
                            Peruse biographies of the Army's Commander and Senior Leaders.
                        </Typography>
                    </CardContent>
                    <CardActionArea>
                        <CardActions>
                            <a href="https://app.powerbi.com/reportEmbed?reportId=98a139c3-e995-41a5-9acf-bcfdf554e6f2&autoAuth=true&ctid=325b4494-1587-40d5-bb31-8b660b7f1038">
                                <Typography variant="overline">
                                    view
                                </Typography>
                            </a>
                        </CardActions>
                    </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: '98%' }}>
                    <CardContent align="left">
                        <img src={cams} alt="1st floor" style={{maxWidth: '98%'}} />
                        <Typography variant="h5">
                            Canadian Army Modernization Strategy
                        </Typography>
                        <Typography variant="body1">
                            Tracking progress of initiatives and sub-initiatives on the road to modernization.
                        </Typography>
                    </CardContent>
                    <CardActionArea>
                        <CardActions>
                            <a href="https://app.powerbi.com/reportEmbed?reportId=0cdaec13-9fa7-425f-bd70-6b21a74a7f94&autoAuth=true&ctid=325b4494-1587-40d5-bb31-8b660b7f1038">
                                <Typography variant="overline">
                                    view
                                </Typography>
                            </a>
                        </CardActions>
                    </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: '98%' }}>
                    <CardContent align="left">
                        <img src={army101} alt="1st floor" style={{maxWidth: '98%'}} />
                        <Typography variant="h5">
                            Army 101
                        </Typography>
                        <Typography variant="body1">
                            Information and placemats that describe the Canadian Army and its structure.
                        </Typography>
                    </CardContent>
                    <CardActionArea>
                        <CardActions>
                            <a href="https://app.powerbi.com/reportEmbed?reportId=12d0edf4-365c-4965-9892-c29be534591c&autoAuth=true&ctid=325b4494-1587-40d5-bb31-8b660b7f1038">
                                <Typography variant="overline">
                                    view
                                </Typography>
                            </a>
                        </CardActions>
                    </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: '98%' }}>
                    <CardContent align="left">
                        <img src={awRegistrations} alt="1st floor" style={{maxWidth: '98%'}} />
                        <Typography variant="h5">
                            Army Week 2022 Registrations
                        </Typography>
                        <Typography variant="body1">
                            Review Army Week attendance metrics.
                        </Typography>
                    </CardContent>
                    <CardActionArea>
                        <CardActions>
                            <a href="https://app.powerbi.com/reportEmbed?reportId=5a75de14-c141-463c-9509-80d3c17d98e9&autoAuth=true&ctid=325b4494-1587-40d5-bb31-8b660b7f1038">
                                <Typography variant="overline">
                                    view
                                </Typography>
                            </a>
                        </CardActions>
                    </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: '98%' }}>
                    <CardContent align="left">
                        <img src={armyOrg} alt="1st floor" style={{maxWidth: '98%'}} />
                        <Typography variant="h5">
                            Canadian Army Interactive Org Chart
                        </Typography>
                        <Typography variant="body1">
                            See how the Army is structured and where various organizations are located.
                        </Typography>
                    </CardContent>
                    <CardActionArea>
                        <CardActions>
                            <a href="https://app.powerbi.com/reportEmbed?reportId=dad185ad-5fd1-4c2f-b56d-bbc512e52025&autoAuth=true&ctid=325b4494-1587-40d5-bb31-8b660b7f1038">
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