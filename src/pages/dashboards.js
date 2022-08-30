import React, {useState, useEffect} from "react"
import LocalizedStrings from 'react-localization';
// import { PowerBIEmbed } from 'powerbi-client-react';
// import { models } from 'powerbi-client';

//Components
import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
import ResponsiveAppBar from '../components/Navbar/navbar';
import DashboardCard from "../components/dashboardCard/dashboardCard";

import { Stack } from "@mui/material";

let dashboard_list = [
    {"title": "Canadian Army Modernization Strategy",
    "description": "Tracking progress of initiatives and sub-initiatives on the road to modernization.",
    "file_title": "CAMS Placemat Desktop",
    "embed_url": "https://app.powerbi.com/reportEmbed?reportId=0cdaec13-9fa7-425f-bd70-6b21a74a7f94&autoAuth=true&ctid=325b4494-1587-40d5-bb31-8b660b7f1038"
    },
    {"title": "Army 101 Dashboard",
    "description": "Dashboards and placemats that describe the Canadian Army and its structure.",
    "file_title": "Army 101",
    "embed_url": "https://app.powerbi.com/reportEmbed?reportId=12d0edf4-365c-4965-9892-c29be534591c&autoAuth=true&ctid=325b4494-1587-40d5-bb31-8b660b7f1038"
    },
    {"title": "CA Interactive Org Chart",
        "description": "See how the CA is structured and where the various organizations are located.",
        "file_title": "CA Org Structure",
        "embed_url": "https://app.powerbi.com/reportEmbed?reportId=789dcf29-c678-4725-8206-c5d0aaaa62e4&autoAuth=true&ctid=325b4494-1587-40d5-bb31-8b660b7f1038"
    },
    {"title": "Commander and Senior Leader Dashboard",
    "description": "Peruse the Commander and Senior Leader Bios of the CA.",
    "file_title": "CA General Officers",
    "embed_url": "https://app.powerbi.com/reportEmbed?reportId=98a139c3-e995-41a5-9acf-bcfdf554e6f2&autoAuth=true&ctid=325b4494-1587-40d5-bb31-8b660b7f1038"
    }
]

export default function Metrics() {
    return (
        <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12}>
            <ResponsiveAppBar />
        </Grid>
        <Grid container spacing={5} alignItems="center" justifyContent="left" mt={5} mr={5} ml={5} mb={5} sx={{display: { xs: 'none', md: 'flex' }}}>
        {dashboard_list ? dashboard_list.map(x => {
            return(
                <Grid item xs={4}>
                < DashboardCard
                title={x.title}
                description={x.description}
                file_title={x.file_title}
                embed_url={x.embed_url}
                />
                </Grid>
            )
        }): null}
        </Grid>
        <Grid container spacing={5} alignItems="center" justifyContent="left" mt={5} mr={5} ml={5} mb={5} sx={{display: { xs: 'flex', md: 'none' }}}>
        <Stack  direction="column"  justifyContent="flex-start"  alignItems="center"  spacing={4} >
        {dashboard_list ? dashboard_list.map(x => {
            return(
                < DashboardCard
                title={x.title}
                description={x.description}
                file_title={x.file_title}
                embed_url={x.embed_url}
                />             
            )
        }): null}
        </Stack>
        </Grid>
        </Grid>
    )
}