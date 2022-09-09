import React, {useState, useEffect} from "react"
import { useTranslation } from "react-i18next"

//Components
import PdfViewer from '../../components/PdfViewer/pdfViewer.js'

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
import ArrowBackIcon from '@mui/icons-material/ArrowBack'


//import the events JSON
var en = require('../../data/enevents.json').events
var fr = require('../../data/frevents.json').events


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

  const eventId = props.params.id
  const events = getEvents()

  // For this line below to work the events need to stay in the correct order where their id=index
  var specificEvent = events[eventId]
 
  const {
    day,
    date,
    time,
    start,
    end,
    category,
    title,
    presenter,
    location,
    roomFloorPlan,
    venueFloorPlan,
    id,
    materials,
    zoomLink,
    color
  } = specificEvent

  // // Grabs the floorplan image that matches this event's room #
  // let roomFloorplan
  // let venueFloorplan
  // let eventPresentation

  // if(specificEvent && specificEvent.RoomFloorplan){
  //   roomFloorplan = data.img.edges.filter(edges => edges.node.relativePath === specificEvent.RoomFloorplan)
  // }

  // if(specificEvent && specificEvent.VenueFloorplan){
  //   venueFloorplan = data.img.edges.filter(edges => edges.node.relativePath === specificEvent.VenueFloorplan)
  // }

  // if(specificEvent && specificEvent.Materials){
  //   eventPresentation = data.pdf.edges.filter(edges => edges.node.name === specificEvent.Materials)
  // }


     return (
      <Box sx={{ width: '100%', height: '100vh', bgcolor: 'white' }}>        
          <Grid container spacing={0} alignItems="flex-start" justifyContent="center">
          <ArrowBackIcon color="black" align="left" onClick={() => navigate(-1)} style={{marginLeft: '5px', fontSize: 'xx-large'}}/>
        
          <Grid item xs={10}>
          
            <Card>
              <CardContent>
                {materials ? materials.length > 0 ? materials.map(x => {
                  const Download = () => {
                    const link = document.createElement("a");
                    link.download = x.name;
                    link.href = x.publicURL;
                    link.click();
                  }; 
                      return (
                        <p>
                          <Stack
                            direction="row"
                            justifyContent="flex-start"
                            spacing="10px">
                            <PdfViewer pdf={x.publicURL}
                              onCancel={()=>setShowPdf(false)}
                              visible={showPdf}
                              name= {x.name}
                              />
                            <Button onClick={()=>setShowPdf(!showPdf)} variant="contained" color="success" endIcon={< PictureAsPdf />}>
                              {t("event_display")}
                            </Button>
                            <Button onClick={Download} variant="contained" color="success" endIcon={< DownloadRounded />}>
                              {t("event_download")}
                            </Button>
                          </Stack>
                        </p>
                      );
                    }): null : null}
                <Typography variant="h5" component="div">
                  {title ? title : null}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {t("event_presenter")} {presenter ? presenter : null}
                </Typography>
                <Typography variant="body2">
                  {t("event_category")} {category ? category : null}
                  <br />
                  {t("event_date")} {date ? date : null}
                  <br />
                  {t("event_time")} {time ? time : null}
                  <br />
                  {t("event_location")}: {location ? location : null}
                  <br />
                </Typography>

              </CardContent>

              <CardActions>
                <Button variant="contained"
                  href={specificEvent ? specificEvent.ZoomLink: null}
                  sx={{ bgcolor: green[500] }}
                  endIcon={< VideoLibraryRoundedIcon />}
                  style={specificEvent ? (specificEvent.ZoomLink ? {display: 'flex'}: {display: 'none'}): null}>
                  {t("event_zoomlink")}
                </Button>
              </CardActions>

              {venueFloorPlan ? venueFloorPlan.length > 0 ? venueFloorplan.map(x => {
                      return (
                        <Grid container justifyContent='center'>
                                   
                        <img src={`../images/${x.VenueFloorplan`} alt="Venue Floorplan"/>
                        </Grid>
                      );
                    }): null : null}

              <Grid item mb={8}>
                {roomFloorplan ? roomFloorplan.map(x => {
                  return (
                    <Grid container justifyContent='center'>
                      <Typography variant="h6" component="div">
                      {specificEvent.location} {t("event_floorplan")}
                      </Typography>
                    <img src={x.node} alt="Room Floorplan"/>
                    </Grid>
                  );
                }): null}
            
              </Grid>

            </Card>
          </Grid>
          </Grid>
          
        </Box>
    );
}
