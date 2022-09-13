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
import Button from '@mui/material/Button'

const baseImgUrl = 'https://caarmydata.blob.core.windows.net/images/'

export default function Dashboards() {

    const { t, i18n } = useTranslation();

    const CardItem = props => {
       
        return (
            <Card sx={{ maxWidth: '98%' }} key={props.db.id}>
                <CardContent sx={{textAlign: 'left'}}>
                    <img src={props.imgSrc} alt={props.db.file_title} style={{maxWidth: '98%'}} />
                    <Typography variant="h5">
                        {props.db.title}
                    </Typography>
                    <Typography variant="body1">
                        {props.db.description}
                    </Typography>
                </CardContent>
                <CardActionArea>
                    <CardActions>
                        <Button size="small" href={props.db.embed_url}>{t("dashboards_view")}</Button>
                    </CardActions>
                </CardActionArea>
            </Card>
        )
    }

    const CardList = () => {
        return (
            <div>
            {t("dashboard_list", { returnObjects: true }).map((db, index) => {
            let imgSrc = baseImgUrl+db.img 
            return <CardItem db={db} imgSrc={imgSrc}/>
            })}
            </div>
        )
    }


    return (
        <Box sx={{ width: '100%', height: '100vh', bgcolor: 'white', marginTop: '50px', paddingTop: '30px'  }}>
        <Grid container alignItems="center" justifyContent="center">
            <Stack direction="column"  justifyContent="center" alignItems="center" spacing={3} style={{maxWidth: '90%', marginBottom: '76px'}}>
                <CardList />
            </Stack>
        </Grid>
        </Box>
    )
}