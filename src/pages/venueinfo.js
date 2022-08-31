import React, {useState, useEffect} from "react"
import { StaticImage } from "gatsby-plugin-image"
import LocalizedStrings from 'react-localization';

//Components
import PageTitle from "../components/PageTitle/pageTitle"
import Layout from "../components/layout"
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

let strings = new LocalizedStrings({
    en: {pagetitle: "Venue Info",
    address: "Ottawa Conference and Event Centre, 200 Coventry Road, Ottawa, ON",
    moreinfo: "More Information",
    floorplantitle: "Floorplan"
    },
    fr: {
        pagetitle: "Informations sur le lieu",
        address: "Ottawa Conference and Event Centre, 200 Coventry Road, Ottawa, ON",
        moreinfo: "Plus d'information",
        floorplantitle: "Plan d'étage"
    }
})


export default function VenueInfo(props) {

    return (
        <Layout>
          <div
          style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `0 var(--size-gutter)`,
          }}
          >
            <PageTitle
              title= {strings.pagetitle}
            />        

          {/* <Grid container spacing={2} alignItems="center" justifyContent="center" m={3}> */}

{/* Desktop */}         
          <Grid container spacing={5} alignItems="flex-start" justifyContent="center" mt={5} mr={5} ml={5} mb={5} sx={{display: { xs: 'none', md: 'flex' }}}>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 650 }}>
              <Grid container justifyContent="center">
                <iframe
                  title="Venue"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.420185993698!2d-75.6567551!3d45.4210305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0579e9f90d19%3A0x9f5ab468c23b6b6!2s200%20Coventry%20Rd%2C%20Ottawa%2C%20ON%20K1K%204S3!5e0!3m2!1sen!2sca!4v1661179337038!5m2!1sen!2sca"
                  width="600"
                  height="450"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
                </Grid>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <h5>{strings? strings.address: null}</h5>
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" color="success" href="https://ottawaconferenceandeventcentre.com/our-facilities/">{strings.moreinfo}</Button>
              </CardActions>
              </Card>          
            </Grid>

            <Grid item xs={4}>
            <h3>{strings.floorplantitle}</h3>

              <Card sx={{ maxWidth: 450 }}>
                <StaticImage src="../images/floor1.jpg" alt="floorplan" />
              </Card>
              <Card sx={{ maxWidth: 450 }}>
                <StaticImage src="../images/floor2.jpg" alt="floorplan" /> 
              </Card>
              <Card sx={{ maxWidth: 450 }}>
                <StaticImage src="../images/floor3.jpg" alt="floorplan" />
              </Card>
            </Grid>
            </Grid>
            
{/* Mobile */}
          <div
          style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter) 0`,
          }}
          >
            <Stack justifyContent="center" spacing="10px" mb = {7} xs = {10} sx={{display: { xs: 'flex', md: 'none' }}}>              
              <Card sx={{ maxWidth: 450 }}>
                <Grid container justifyContent="center">
                  <iframe
                    title="Venue"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.420185993698!2d-75.6567551!3d45.4210305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0579e9f90d19%3A0x9f5ab468c23b6b6!2s200%20Coventry%20Rd%2C%20Ottawa%2C%20ON%20K1K%204S3!5e0!3m2!1sen!2sca!4v1661179337038!5m2!1sen!2sca"
                    width="400"
                    height="300"
                    style={{ border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                </Grid>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <h5>{strings? strings.address: null}</h5>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" color="success" href="https://ottawaconferenceandeventcentre.com/our-facilities/">{strings.moreinfo}</Button>
                </CardActions>
              </Card>              
              
                <h3>{strings.floorplantitle}</h3>                
                
              <Card sx={{ maxWidth: 450 }}>              
                <StaticImage src="../images/floor1.jpg" alt="floorplan" />
              </Card>                
                
              <Card sx={{ maxWidth: 450 }}>   
                <StaticImage src="../images/floor2.jpg" alt="floorplan" /> 
              </Card>                
                
              <Card sx={{ maxWidth: 450 }} mb={7}>  
                <StaticImage src="../images/floor3.jpg" alt="floorplan" />
              </Card>             
                            
            </Stack> 
          </div>
        </div>
      </Layout>
    )
  }
