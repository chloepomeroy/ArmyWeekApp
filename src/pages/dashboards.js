import React, {useState, useEffect} from "react"
import LocalizedStrings from 'react-localization';
// import { PowerBIEmbed } from 'powerbi-client-react';
// import { models } from 'powerbi-client';

//Components
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ResponsiveAppBar from '../components/Navbar/navbar';

export default function Metrics() {
    return (
        <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12}>
      <ResponsiveAppBar />
      </Grid>
      <Box mt={6} component="span" sx={{p: 2}}>
            <iframe title="CAMS Placemat Desktop" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=0cdaec13-9fa7-425f-bd70-6b21a74a7f94&autoAuth=true&ctid=325b4494-1587-40d5-bb31-8b660b7f1038" frameborder="0" allowFullScreen="true"></iframe>
        </Box>
        </Grid>
    )
}