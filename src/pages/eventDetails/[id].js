import React, {useState, useEffect} from "react"
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import LocalizedStrings from 'react-localization';

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


//import the events JSON
var en = require('../../data/enevents.json').events;
var fr = require('../../data/frevents.json').events;


let strings = new LocalizedStrings({
  en: {
    events: {en},
    title: "Selected Event - Details",
    presenter: "Presenter:",
    category: "Category:",
    date: "Date:",
    time: "Time:",
    location: "Location",
    lookupmaterials: "Documents",
    zoomlink: "Zoom Link",
    floorplan: "Floorplan",
    download: "Download",
    display: "View PDF"
  },
  fr: {
    events: {fr},
    title: "Évènement selectionné - Détails",
    presenter: "Présentateur:",
    category: "Catégorie:",
    date: "Date:",
    time: "Heure:",
    location: "Lieu",
    lookupmaterials: "Documents",
    zoomlink: "Lien pour Zoom",
    floorplan: "Plan d'étage",
    download: "Téléchargez",
    display: "Afficher le PDF"
  }
})


export default function SelectedEvent(props) {
  const [initialLocaleCode, setInitialLocaleCode] = useState('en')

  useEffect(() => {
    if((window.navigator.language).includes("fr")){
      setInitialLocaleCode("fr")
    } else {
      setInitialLocaleCode("en")
    }      
}, [])

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
  const events = strings.events[initialLocaleCode]
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

      //Desktop view
        <Layout>
          <Grid container spacing={5} alignItems="flex-start" justifyContent="center" mt={5} mb={5} sx={{display: { xs: 'none', md: 'flex' }}}>
            <Grid item xs={4}>
          <Card sx={{ minWidth: 300 }}>
      <CardContent>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
        {strings ? strings.title : null}
        </Typography>
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
                    {strings ? strings.display : null}
                    </Button>
                  <Button onClick={Download} variant="contained" color="success" endIcon={< DownloadRounded />}>
                  {strings ? strings.download : null}
                  </Button>
                  </Stack>
                 </p>
              );
            }): null}
        <Typography variant="h5" component="div">
        {specificEvent ? specificEvent.title: null}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {strings ? strings.presenter : null} {specificEvent ? specificEvent.Presenter : null}

        </Typography>
        <Typography variant="body2">
        {strings ? strings.category : null} {specificEvent ? specificEvent.Category : null}
          <br />
          {strings ? strings.date : null} {specificEvent ? specificEvent.date : null}
          <br />
          {strings ? strings.time : null} {specificEvent ? specificEvent.Time : null}
          <br />
          {strings ? strings.location : null}: {specificEvent ? specificEvent.location : null}
          <br />

        </Typography>

      </CardContent>
      <CardActions>

  <Button variant="contained"
    href={specificEvent ? specificEvent.ZoomLink: null}
    sx={{ bgcolor: green[500] }}
    endIcon={< VideoLibraryRoundedIcon />}
    style={specificEvent ? (specificEvent.ZoomLink ? {display: 'flex'}: {display: 'none'}): null}>
    {strings ? strings.zoomlink : null}
  </Button>

      </CardActions>
      {/* Venue Floorplan Image Please make it pretty :D */}
      {venueFloorplan ? venueFloorplan.map(x => {
              return (
                <Grid container justifyContent='center'>
                    <Typography variant="h6" component="div">
                      {/* {strings ? strings.location: null} */}
                    </Typography>            
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
                  {specificEvent.location} {strings ? strings.floorplan: null}
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
          <Grid item xs={4} sx={{display: { xs: 'flex', md: 'none' }}}>
          <Card sx={{ minWidth: 300 }}>
      <CardContent>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
        {strings ? strings.title : null}
        </Typography>
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
                    {strings ? strings.display : null}
                    </Button>
                  <Button onClick={Download} variant="contained" color="success" endIcon={< DownloadRounded />}>
                  {strings ? strings.download : null}
                  </Button>
                  </Stack>
                 </p>
              );
            }): null}
        <Typography variant="h5" component="div">
        {specificEvent ? specificEvent.title: null}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {strings ? strings.presenter : null} {specificEvent ? specificEvent.Presenter : null}

        </Typography>
        <Typography variant="body2">
        {strings ? strings.category : null} {specificEvent ? specificEvent.Category : null}
          <br />
          {strings ? strings.date : null} {specificEvent ? specificEvent.date : null}
          <br />
          {strings ? strings.time : null} {specificEvent ? specificEvent.Time : null}
          <br />
          {strings ? strings.location : null}: {specificEvent ? specificEvent.location : null}
          <br />

        </Typography>

      </CardContent>
      <CardActions>

  <Button variant="contained"
    href={specificEvent ? specificEvent.ZoomLink: null}
    sx={{ bgcolor: green[500] }}
    endIcon={< VideoLibraryRoundedIcon />}
    style={specificEvent ? (specificEvent.ZoomLink ? {display: 'flex'}: {display: 'none'}): null}>
    {strings ? strings.zoomlink : null}
  </Button>

      </CardActions>
      {/* Venue Floorplan Image Please make it pretty :D */}
      {venueFloorplan ? venueFloorplan.map(x => {
              return (
                <Grid container justifyContent='center'>
                    <Typography variant="h6" component="div">
                      {/* {strings ? strings.location: null} */}
                    </Typography>            
                <GatsbyImage image={getImage(x.node)} alt="Venue Floorplan"/>
                </Grid>
              );
            }): null}

          <Grid item>
            {roomFloorplan ? roomFloorplan.map(x => {
          return (
            <Grid container justifyContent='center'>
                <Typography variant="h6" component="div">
                  {specificEvent.location} {strings ? strings.floorplan: null}
                </Typography>
            <GatsbyImage image={getImage(x.node)} alt="Room Floorplan"/>
            </Grid>
          );
            }): null}
            
            </Grid>

            </Card>
            </Grid>
        </Layout>
    );
}

export const Head = () => <Seo title="Selected Event" />
