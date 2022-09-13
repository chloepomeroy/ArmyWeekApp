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
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const baseImgUrl = 'https://caarmydata.blob.core.windows.net/images/'

export default function Resources() {

    const { t, i18n } = useTranslation();

    const ArmyCouncilCardItem = props => {
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
                        <Button size="small" href={props.db.url}>{t("resources_view")}</Button>
                    </CardActions>
                </CardActionArea>
            </Card>
        )
    }

    const ArmyCouncilCardList = () => {
        return (
            <div>
            {t("army_council_resources_list", { returnObjects: true }).map((db, index) => {
            let imgSrc = baseImgUrl+db.img       
            return <ArmyCouncilCardItem db={db} imgSrc={imgSrc}/>
            })}
            </div>
        )
    }

    const SALSCardItem = props => {
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
                        <Button size="small" href={props.db.url}>{t("resources_view")}</Button>
                    </CardActions>
                </CardActionArea>
            </Card>
        )
    }

    const SALSCardList = () => {
        return (
            <div>
            {t("sals_resources_list", { returnObjects: true }).map((db, index) => {
            let imgSrc = baseImgUrl+db.img 
            return <SALSCardItem db={db} imgSrc={imgSrc}/>
            })}
            </div>
        )
    }

    const OrdersCardItem = props => {
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
                        <Button size="small" href={props.db.url}>{t("resources_view")}</Button>
                    </CardActions>
                </CardActionArea>
            </Card>
        )
    }

    const OrdersCardList = () => {
        return (
            <div>
            {t("orders_resources_list", { returnObjects: true }).map((db, index) => {
            let imgSrc = baseImgUrl+db.img 
            return <OrdersCardItem db={db} imgSrc={imgSrc}/>
            })}
            </div>
        )
    }

    const PlacematsCardItem = props => {
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
                        <Button size="small" href={props.db.url}>{t("resources_view")}</Button>
                    </CardActions>
                </CardActionArea>
            </Card>
        )
    }

    const PlacematsCardList = () => {
        return (
            <div>
            {t("placemat_resources_list", { returnObjects: true }).map((db, index) => {
            let imgSrc = baseImgUrl+db.img 
            return <OrdersCardItem db={db} imgSrc={imgSrc}/>
            })}
            </div>
        )
    }

    return (
        <Box sx={{ width: '100%', height: '100vh', bgcolor: 'white', marginTop: '50px', paddingTop: '30px'  }}>
        <Grid container alignItems="center" justifyContent="center">
            <Stack direction="column"  justifyContent="center" alignItems="center" spacing={3} style={{maxWidth: '90%', marginBottom: '76px'}}>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                align="left"
                >
                <Typography variant="h5">Army Council Resources</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ArmyCouncilCardList />
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                align="left"
                >
                <Typography variant="h5">SALS Resources</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <SALSCardList />
                </AccordionDetails>
            </Accordion>   

            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
                align="left"
                >
                <Typography variant="h5">Orders and Directives</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <OrdersCardList />
                </AccordionDetails>
            </Accordion>   

            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4a-content"
                id="panel4a-header"
                align="left"
                >
                <Typography variant="h5">Placemats</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <PlacematsCardList />
                </AccordionDetails>
            </Accordion>     
            </Stack>
        </Grid>
        </Box>
    )
}