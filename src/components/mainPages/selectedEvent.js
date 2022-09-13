import React, {useState, useEffect} from "react"
import { useTranslation } from "react-i18next"
import { useParams } from 'react-router-dom'

//Components
import PdfViewer from '../common/PdfViewer/pdfViewer'

//MUI
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { green } from '@mui/material/colors'
import Typography from '@mui/material/Typography'
import VideoLibraryRoundedIcon from '@mui/icons-material/VideoLibraryRounded'
import { PictureAsPdf } from "@mui/icons-material"
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import { DownloadRounded } from "@mui/icons-material"

//import the events JSON
var en = require('../data/enevents.json').events
var fr = require('../data/frevents.json').events

import images from '../../img/*'

export default function SelectedEvent(props) {

  const [showPdf, setShowPdf] = useState(false)

  const { t, i18n } = useTranslation()

  let locale = i18n.language

  function getEvents() {
    if (locale=="fr") {
      return fr
    } else {
      return en
    }
  }

  const { eventId } = useParams()

  const events = getEvents()

  let specificEvent
  let venueFloorPlanImage
  let roomFloorPlanImage

  if(eventId){
    // retrieve this event from data file
    for(let x = 0; x < events.length; x++){
      if(events[x].id == eventId){
        specificEvent = events[x]
      }
    }

    if(specificEvent.VenueFloorplan){
      venueFloorPlanImage = (
        <img src={images[specificEvent.VenueFloorplan]} style={{maxWidth: '95%'}} alt="Venue Floorplan" /> 
      )
    }

    if(specificEvent.RoomFloorplan){
      roomFloorPlanImage = ( 
        <>
        <Typography variant="h6">
          {t("event_floorplan")}
        </Typography>
        <img src={images[specificEvent.RoomFloorplan]} style={{maxWidth: '95%'}} alt="Room Floorplan"/>
        </>
      )
    }
  }

     return (
      <Box sx={{ width: '100%', height: '100vh', bgcolor: 'white', marginTop: '40px', paddingTop: '30px' }}>        
        <Grid container spacing={0} alignItems="flex-start" justifyContent="center" sx={{maxWidth: '95%'}}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="left" style={{marginBottom: '76px'}}>
            <Card autoFocus>
              <CardContent>

              <Typography variant="h5">
                {specificEvent.title ? specificEvent.title : null}
              </Typography>

              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {t("event_presenter")} {specificEvent.Presenter ? specificEvent.Presenter : null}
              </Typography>
             
              <Typography variant="body2">
                {t("responsible")}: {specificEvent.Responsible ? specificEvent.Responsible : null}
                <br></br>
                {t("cams")}: {specificEvent.CAMS ? specificEvent.CAMS : null}
                <br></br>
                {t("event_category")}: {specificEvent.Category ? specificEvent.Category : null}
                <br></br>
                {t("event_date")}: {specificEvent.date ? specificEvent.date : null}
                <br></br>
                {t("event_time")}: {specificEvent.Time ? specificEvent.Time : null}
                <br></br>
                {t("event_location")}: {specificEvent.location ? specificEvent.location : null}
              </Typography>

              </CardContent>

              <CardActions sx={{flexDirection: 'column'}}>
              
              {specificEvent.ZoomLink ?
                <Button variant="contained"
                  href={specificEvent.ZoomLink}
                  sx={{ bgcolor: green[500], display: 'flex'}}
                  endIcon={< VideoLibraryRoundedIcon />}
                >
                  {t("event_zoomlink")}
                </Button>
              : null }
              <br></br>

              <Typography variant="h5">
                {t("presentation_and_resources")}
              </Typography>

              {specificEvent.Materials ? specificEvent.Materials.length > 0 ? specificEvent.Materials.map(x => {

                const Download = () => {
                  const link = document.createElement("a")
                  
                  link.href = x.url
                  link.click()
                }

                return (
                    <Stack
                      direction="row"
                      justifyContent="flex-start"
                      sx={{padding: '10px'}}
                      spacing={5}
                    >
                      <Typography variant="body1">
                        {x.filename}
                      </Typography>
                      <br></br>

                      <Button onClick={Download} variant="contained" color="success" endIcon={< DownloadRounded />}>
                        {t("event_download")}
                      </Button>

                    </Stack>
                )
              })
              : null
              : null
              }

              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center" style={{marginTop: '30px'}}>
              {venueFloorPlanImage ? venueFloorPlanImage : null}
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center" style={{marginBottom: '76px'}}>
              {roomFloorPlanImage ? roomFloorPlanImage : null}
          </Grid>
        </Grid>
    </Box>
  )
}