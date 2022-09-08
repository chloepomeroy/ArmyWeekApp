import React, {useState, useEffect} from "react"
import { useStaticQuery, graphql, navigate } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

//Components
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import PdfViewer from '../../components/PdfViewer/pdfViewer.js'

//MUI
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { green } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import VideoLibraryRoundedIcon from '@mui/icons-material/VideoLibraryRounded';
import { PictureAsPdf } from "@mui/icons-material";
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { DownloadRounded } from "@mui/icons-material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { t} from "i18next";
import { useTranslation } from "react-i18next";


//import the events JSON
var en = require('../../data/enevents.json').events;
var fr = require('../../data/frevents.json').events;


export default function SelectedEvent(props) {
  const { i18n } = useTranslation()

  let locale = i18n.language

  function getEvents() {
    if (locale=="fr") {
      return fr
    } else {
      return en
    }
  }
  

  const data = useStaticQuery(graphql`
  query {
    img: 
    allFile {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(width: 500)
          }
          relativePath
        }
      }
    }
    pdf: 
    allFile {
      edges {
        node {
          absolutePath
          name
          ext
          relativePath
          publicURL
        }
      }
    }
  }`);

  const eventId = props.params.id
  const events = getEvents()
  // For this line below to work the events need to stay in the correct order where their id=index
  var specificEvent = events[eventId];

  // Grabs the floorplan image that matches this event's room #
  let roomFloorplan
  let venueFloorplan
  let eventPresentation

  if(specificEvent && specificEvent.RoomFloorplan){
    roomFloorplan = data.img.edges.filter(edges => edges.node.relativePath === specificEvent.RoomFloorplan)
  }

  if(specificEvent && specificEvent.VenueFloorplan){
    venueFloorplan = data.img.edges.filter(edges => edges.node.relativePath === specificEvent.VenueFloorplan)
  }

  if(specificEvent && specificEvent.Materials){
    eventPresentation = data.pdf.edges.filter(edges => edges.node.name === specificEvent.Materials)
  }

  const [showPdf, setShowPdf] = useState(false)

     return (
        <Layout pageTitle={t("event_pagetitle")}>        
        
          {/* Desktop view */}
          <Grid container spacing={5} alignItems="flex-start" justifyContent="center" mt={5} mb={5} sx={{display: { xs: 'none', md: 'flex' }}}>
            <Grid item>
              <ArrowBackIcon color="black" style={{marginRight: '30px'}} onClick={() => navigate(-1)} />
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ minWidth: 300 }}>
                <CardContent>
                  {eventPresentation ? eventPresentation.map(x => {
                    const Download = () => {
                      const link = document.createElement("a");
                      link.download = x.node.name;
                      link.href = x.node.publicURL;
                      link.click();
                    }; 
                        return (
                          <p>
                            <Stack
                              direction="row"
                              justifyContent="flex-start"
                              spacing="10px">
                              <PdfViewer pdf={x.node.publicURL}
                                onCancel={()=>setShowPdf(false)}
                                visible={showPdf}
                                name= {x.node.name}
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
                      }): null}
                      <Typography variant="h5" component="div">
                        {specificEvent ? specificEvent.title: null}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {t("event_presenter")} {specificEvent ? specificEvent.Presenter : null}
                      </Typography>
                      <Typography variant="body2">
                        {t("event_category")} {specificEvent ? specificEvent.Category : null}
                        <br />
                        {t("event_date")} {specificEvent ? specificEvent.date : null}
                        <br />
                        {t("event_time")} {specificEvent ? specificEvent.Time : null}
                        <br />
                        {t("event_location")}: {specificEvent ? specificEvent.location : null}
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
                {/* Venue Floorplan Image Please make it pretty :D */}
                {venueFloorplan ? venueFloorplan.map(x => {
                        return (
                          <Grid container justifyContent='center'>          
                          <GatsbyImage image={getImage(x.node)} alt="Venue Floorplan"/>
                          </Grid>
                        );
                      }): null}

              </Card>
            </Grid>

            <Grid item xs={4}>
              {roomFloorplan ? roomFloorplan.map(x => {
                return (
                  <Grid container justifyContent='center'>
                  <Card sx={{ maxWidth: 500 }}>
                    <CardContent>
                      <Typography variant="h6" component="div">
                        {specificEvent.location} {t("event_floorplan")}
                      </Typography>
                    </CardContent>
                  <GatsbyImage image={getImage(x.node)} alt="Room Floorplan"/>
                  </Card>
                  </Grid>
                );
              }): null}
            
            </Grid>
            
          
          </Grid>          

          {/* Mobile View */}          
          <Grid container spacing={0} alignItems="flex-start" justifyContent="center" mt={1} mb={5} sx={{display: { xs: 'flex', md: 'none' }}}>
          <ArrowBackIcon color="black" align="left" onClick={() => navigate(-1)} style={{marginLeft: '5px', fontSize: 'xx-large'}}/>
        
          <Grid item xs={10}>
          
            <Card>
              <CardContent>
                {eventPresentation ? eventPresentation.map(x => {
                  const Download = () => {
                    const link = document.createElement("a");
                    link.download = x.node.name;
                    link.href = x.node.publicURL;
                    link.click();
                  }; 
                      return (
                        <p>
                          <Stack
                            direction="row"
                            justifyContent="flex-start"
                            spacing="10px">
                            <PdfViewer pdf={x.node.publicURL}
                              onCancel={()=>setShowPdf(false)}
                              visible={showPdf}
                              name= {x.node.name}
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
                    }): null}
                <Typography variant="h5" component="div">
                  {specificEvent ? specificEvent.title: null}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {t("event_presenter")} {specificEvent ? specificEvent.Presenter : null}
                </Typography>
                <Typography variant="body2">
                  {t("event_category")} {specificEvent ? specificEvent.Category : null}
                  <br />
                  {t("event_date")} {specificEvent ? specificEvent.date : null}
                  <br />
                  {t("event_time")} {specificEvent ? specificEvent.Time : null}
                  <br />
                  {t("event_location")}: {specificEvent ? specificEvent.location : null}
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

              {/* Venue Floorplan Image Please make it pretty :D */}
              {venueFloorplan ? venueFloorplan.map(x => {
                      return (
                        <Grid container justifyContent='center'>
                                   
                        <GatsbyImage image={getImage(x.node)} alt="Venue Floorplan"/>
                        </Grid>
                      );
                    }): null}

              <Grid item mb={8}>
                {roomFloorplan ? roomFloorplan.map(x => {
                  return (
                    <Grid container justifyContent='center'>
                      <Typography variant="h6" component="div">
                      {specificEvent.location} {t("event_floorplan")}
                      </Typography>
                    <GatsbyImage image={getImage(x.node)} alt="Room Floorplan"/>
                    </Grid>
                  );
                }): null}
            
              </Grid>

            </Card>
          </Grid>
          </Grid>
          
        </Layout>
    );
}

export const Head = () => <Seo title="Event Details" />
