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
import cearp from '../../img/cearp.jpg'
import g1 from '../../img/g1.jpg'

export default function Dashboards() {

    const { t, i18n } = useTranslation();

    return (
        <Box sx={{ width: '100%', height: '100vh', bgcolor: 'white', marginTop: '50px', paddingTop: '30px'  }}>
        <Grid container alignItems="center" justifyContent="center">
            <Stack direction="column"  justifyContent="center" alignItems="center" spacing={3} style={{maxWidth: '90%', marginBottom: '76px'}}>
                
                <Card sx={{ maxWidth: 'auto' }}>
                    <CardContent align="left">
                        <img src={bios} alt="1st floor" style={{maxWidth: '98%'}} />
                        <Typography variant="h5">
                            {t("dashboard_list", { returnObjects: true })[4].title}
                        </Typography>
                        <Typography variant="body1">
                            {t("dashboard_list", { returnObjects: true })[4].description}
                        </Typography>
                    </CardContent>
                    <CardActionArea>
                        <CardActions>
                            <a href={t("dashboard_list", { returnObjects: true })[4].embed_url}>
                                <Typography variant="overline">
                                    {t("dashboards_view")}
                                </Typography>
                            </a>
                        </CardActions>
                    </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 'auto' }}>
                    <CardContent align="left">
                        <img src={cams} alt="1st floor" style={{maxWidth: '98%'}} />
                        <Typography variant="h5">
                            {t("dashboard_list", { returnObjects: true })[1].title}
                        </Typography>
                        <Typography variant="body1">
                            {t("dashboard_list", { returnObjects: true })[1].description}
                        </Typography>
                    </CardContent>
                    <CardActionArea>
                        <CardActions>
                            <a href={t("dashboard_list", { returnObjects: true })[1].embed_url}>
                                <Typography variant="overline">
                                    {t("dashboards_view")}
                                </Typography>
                            </a>
                        </CardActions>
                    </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 'auto' }}>
                    <CardContent align="left">
                        <img src={army101} alt="1st floor" style={{maxWidth: '98%'}} />
                        <Typography variant="h5">
                            {t("dashboard_list", { returnObjects: true })[2].title}
                        </Typography>
                        <Typography variant="body1">
                            {t("dashboard_list", { returnObjects: true })[2].description}
                        </Typography>
                    </CardContent>
                    <CardActionArea>
                        <CardActions>
                            <a href={t("dashboard_list", { returnObjects: true })[2].embed_url}>
                                <Typography variant="overline">
                                    {t("dashboards_view")}
                                </Typography>
                            </a>
                        </CardActions>
                    </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 'auto' }}>
                    <CardContent align="left">
                        <img src={awRegistrations} alt="1st floor" style={{maxWidth: '98%'}} />
                        <Typography variant="h5">
                            {t("dashboard_list", { returnObjects: true })[0].title}
                        </Typography>
                        <Typography variant="body1">
                            {t("dashboard_list", { returnObjects: true })[0].description}
                        </Typography>
                    </CardContent>
                    <CardActionArea>
                        <CardActions>
                            <a href={t("dashboard_list", { returnObjects: true })[0].embed_url}>
                                <Typography variant="overline">
                                    {t("dashboards_view")}
                                </Typography>
                            </a>
                        </CardActions>
                    </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 'auto' }}>
                    <CardContent align="left">
                        <img src={armyOrg} alt="1st floor" style={{maxWidth: '98%'}} />
                        <Typography variant="h5">
                            {t("dashboard_list", { returnObjects: true })[3].title}
                        </Typography>
                        <Typography variant="body1">
                        {t("dashboard_list", { returnObjects: true })[3].description}
                        </Typography>
                    </CardContent>
                    <CardActionArea>
                        <CardActions>
                            <a href={t("dashboard_list", { returnObjects: true })[4].embed_url}>
                                <Typography variant="overline">
                                    {t("dashboards_view")}
                                </Typography>
                            </a>
                        </CardActions>
                    </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 'auto' }}>
                    <CardContent align="left">
                        <img src={g1} alt="1st floor" style={{maxWidth: '98%'}} />
                        <Typography variant="h5">
                            {t("dashboard_list", { returnObjects: true })[5].title}
                        </Typography>
                        <Typography variant="body1">
                            {t("dashboard_list", { returnObjects: true })[5].description}
                        </Typography>
                    </CardContent>
                    <CardActionArea>
                        <CardActions>
                            <a href={t("dashboard_list", { returnObjects: true })[5].embed_url}>
                                <Typography variant="overline">
                                    {t("dashboards_view")}
                                </Typography>
                            </a>
                        </CardActions>
                    </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 'auto' }}>
                    <CardContent align="left">
                        <img src={cearp} alt="1st floor" style={{maxWidth: '98%'}} />
                        <Typography variant="h5">
                            {t("dashboard_list", { returnObjects: true })[6].title}
                        </Typography>
                        <Typography variant="body1">
                            {t("dashboard_list", { returnObjects: true })[6].description}
                        </Typography>
                    </CardContent>
                    <CardActionArea>
                        <CardActions>
                            <a href={t("dashboard_list", { returnObjects: true })[6].embed_url}>
                                <Typography variant="overline">
                                    {t("dashboards_view")}
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