import React from "react"
import { useTranslation } from "react-i18next"

// Styling
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import floor1 from '../../img/floor1.jpg'
import floor2 from '../../img/floor2.jpg'
import floor3 from '../../img/floor3.jpg'

export default function Venue(props) {

  const { t, i18n } = useTranslation();

    return (
      <Box sx={{ width: '100%', height: '100vh', bgcolor: 'white', marginTop: '40px', paddingTop: '30px'  }}>
      <Grid container justifyContent="center" alignItems="center" sx={{ flexGrow: 5, display: 'inline' }}>
            <Stack justifyContent="center" spacing="10px" mb = {7} xs = {10} sx={{display: 'inline', marginBottom: '76px'}}>              
              <Card sx={{ maxWidth: '98%' }}>
              <CardHeader
                title={t("venue_name")}
                subheader={t("venue_address")}
              />
                <CardContent>
                  <Grid container justifyContent="center">
                    <iframe
                      title="Venue"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.420185993698!2d-75.6567551!3d45.4210305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0579e9f90d19%3A0x9f5ab468c23b6b6!2s200%20Coventry%20Rd%2C%20Ottawa%2C%20ON%20K1K%204S3!5e0!3m2!1sen!2sca!4v1661179337038!5m2!1sen!2sca"
                      width="98%"
                      height="auto"
                      style={{ border: "0" }}
                      allowfullscreen=""
                      loading="lazy"
                    ></iframe>
                  </Grid>
                </CardContent>
                <CardActions>
                  <Button variant="contained" color="success" href="https://ottawaconferenceandeventcentre.com/our-facilities/">{t("venue_moreinfo")}</Button>
                </CardActions>
              </Card>              
              
              <Typography variant="h5" style={{marginTop: '30px'}}>
                {t("venue_floorplantitle")}
              </Typography>

              <Card sx={{ maxWidth: '98%' }}>
              <CardContent>
                <img src={floor1} alt="1st floor" style={{maxWidth: '98%'}} />
              </CardContent>
              </Card>

              <Card sx={{ maxWidth: '98%' }}>
                <CardContent>
                  <img src={floor2} alt="2nd floor" style={{maxWidth: '98%'}} /> 
                </CardContent>
              </Card>
              <Card sx={{ maxWidth: '98%'}}>
                <CardContent>
                  <img src={floor3} alt="3rd floor" style={{maxWidth: '98%'}} />
                </CardContent>
              </Card>      
            </Stack> 
      </Grid>
      </Box>

      // {/* Desktop */}         
      // <Grid container spacing={5} alignItems="flex-start" justifyContent="center" mt={5} mr={5} ml={5} mb={5} sx={{display: { xs: 'none', md: 'flex' }}}>
      // <Grid item xs={4}>
      //   <Card sx={{ maxWidth: 650 }}>
      //   <CardHeader
      //     title={t("venue_name")}
      //     subheader={t("venue_address")}
      //   />
      //   <CardContent>
      //     <Grid container justifyContent="center">
      //     <iframe
      //       title="Venue"
      //       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.420185993698!2d-75.6567551!3d45.4210305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0579e9f90d19%3A0x9f5ab468c23b6b6!2s200%20Coventry%20Rd%2C%20Ottawa%2C%20ON%20K1K%204S3!5e0!3m2!1sen!2sca!4v1661179337038!5m2!1sen!2sca"
      //       width="600"
      //       height="450"
      //       style={{ border: "0" }}
      //       allowfullscreen=""
      //       loading="lazy"
      //     ></iframe>
      //     </Grid>
      //   </CardContent>
      //   <CardActions>
      //     <Button variant="contained" color="success" href="https://ottawaconferenceandeventcentre.com/our-facilities/">{t("venue_moreinfo")}</Button>
      //   </CardActions>
      //   </Card>          
      // </Grid>

      // <Grid item xs={4} style={{marginTop: '30px'}}>
      //   <h3>{t("venue_floorplantitle")}</h3>

      //   <Card sx={{ maxWidth: 450 }}>
      //   <CardContent>
      //     <StaticImage src="../images/floor1.jpg" alt="1st floor" />
      //   </CardContent>
      //   </Card>

      //   <Card sx={{ maxWidth: 450 }}>
      //     <CardContent>
      //       <StaticImage src="../images/floor2.jpg" alt="2nd floor" /> 
      //     </CardContent>
      //   </Card>
      //   <Card sx={{ maxWidth: 450 }}>
      //     <CardContent>
      //       <StaticImage src="../images/floor3.jpg" alt="3rd floor" />
      //     </CardContent>
      //   </Card>
      // </Grid>
      // </Grid>
    )
}
