import React, {useState, useEffect} from "react"
import LocalizedStrings from 'react-localization';
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import { PowerBIEmbed } from 'powerbi-client-react';
// import { models } from 'powerbi-client';

//Components
import Layout from "../components/layout";
import PageTitle from "../components/PageTitle/pageTitle"
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

//Screenshots

let strings = new LocalizedStrings({
    en: {view: "View",
    pagetitle: "Dashboards",
    },
    fr: {view: "Affichez", 
    pagetitle: "Tableaux de bord",
    }
  })


let dashboard_list = [
    {"title": "2022 Army Week Registration",
    "description": "Take a look at Army Week attendance metrics.",
    "file_title": "2022 Army Week Registration",
    "embed_url": "https://app.powerbi.com/view?r=eyJrIjoiODBmYTM1MDQtZDA5Ny00NTlhLWI5NGItZmNlMGQyNjIxNGFmIiwidCI6IjMyNWI0NDk0LTE1ODctNDBkNS1iYjMxLThiNjYwYjdmMTAzOCJ9",
    "img": "armyweekregss.JPG"
    },
    {"title": "Canadian Army Modernization Strategy",
    "description": "Tracking progress of initiatives and sub-initiatives on the road to modernization.",
    "file_title": "CAMS Placemat Desktop",
    "embed_url": "https://app.powerbi.com/view?r=eyJrIjoiN2JhYTIwZGQtMDlhMS00ZjA3LTk4YzMtYTg4ZjA0ZGQ4MzY3IiwidCI6IjMyNWI0NDk0LTE1ODctNDBkNS1iYjMxLThiNjYwYjdmMTAzOCJ9",
    "img": "camsss.JPG"
    },
    {"title": "Army 101 Dashboard",
    "description": "Dashboards and placemats that describe the Canadian Army and its structure.",
    "file_title": "Army 101",
    "embed_url": "https://app.powerbi.com/view?r=eyJrIjoiMTQ2NWIwMDAtN2I5ZS00MjJmLWExNGYtNGI2ZGZlOGRlNjAzIiwidCI6IjMyNWI0NDk0LTE1ODctNDBkNS1iYjMxLThiNjYwYjdmMTAzOCJ9",
    "img": "army101ss.JPG"
    },
    {"title": "CA Interactive Org Chart",
    "description": "See how the CA is structured and where the various organizations are located.",
    "file_title": "CA Org Structure",
    "embed_url": "https://app.powerbi.com/view?r=eyJrIjoiM2IzMDdlYzQtODg0MC00YWYwLWJjNjAtNjI1MmE2NTBlMTJhIiwidCI6IjMyNWI0NDk0LTE1ODctNDBkNS1iYjMxLThiNjYwYjdmMTAzOCJ9&pageName=ReportSection",
    "img": "orgstructss.jpg"
    },
    {"title": "Commander and Senior Leader Dashboard",
    "description": "Peruse the Commander and Senior Leader Bios of the CA.",
    "file_title": "CA General Officers",
    "embed_url": "https://app.powerbi.com/view?r=eyJrIjoiODBmYTM1MDQtZDA5Ny00NTlhLWI5NGItZmNlMGQyNjIxNGFmIiwidCI6IjMyNWI0NDk0LTE1ODctNDBkNS1iYjMxLThiNjYwYjdmMTAzOCJ9",
    "img": "CAGenOffss.JPG"
    },
]

export default function Metrics() {

    //query to get dashboard screenshots
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
    }`);

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
            </div>

            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid container spacing={5} alignItems="flex-start" justifyContent="left" mt={5} mr={5} ml={5} mb={5} sx={{display: { xs: 'none', md: 'flex' }}}>
        
                    {dashboard_list ? dashboard_list.map(db => {
                        let db_img
                        if(db && db.img){
                            db_img = data.img.edges.filter(edges => edges.node.relativePath === db.img)
                        }
                        return(
                            <Grid item xs={4}>
                                <Card sx={{ maxWidth: 500}}>
                                    {db_img ? db_img.map(db_img => {
                                        return (
                                            <Grid container justifyContent='center'>
                                                <Typography variant="h6" component="div">
                                                    {/* {strings ? strings.location: null} */}
                                                </Typography>            
                                                <GatsbyImage image={getImage(db_img.node)} alt={db.title}/>
                                            </Grid>
                                                );
                                    }): null}
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {db.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {db.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" href={db.embed_url}>{strings ? strings.view: null}</Button>
                                    </CardActions>
                                </Card>                
                            </Grid>
                        )
                    }): null}
                </Grid>

{/* Mobile */}
                <Stack  direction="column"  justifyContent="flex-start"  alignItems="center"  spacing={4} mb={7} sx={{display: { xs: 'flex', md: 'none' }}} mt={5}>
                    {dashboard_list ? dashboard_list.map(db => {
                        let db_img
                        if(db && db.img){
                            db_img = data.img.edges.filter(edges => edges.node.relativePath === db.img)
                        }
                        return(
                            <Grid item xs={10}>
                                <Card sx={{ maxWidth: 500 }}>
                                    {db_img ? db_img.map(db_img => {
                                        return (
                                            <Grid container justifyContent='center'>
                                                <Typography variant="h6" component="div">
                                                    {/* {strings ? strings.location: null} */}
                                                </Typography>            
                                                <GatsbyImage image={getImage(db_img.node)} alt={db.title}/>
                                            </Grid>
                                                );
                                    }): null}
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {db.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {db.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" href={db.embed_url}>{strings ? strings.view: null}</Button>
                                    </CardActions>
                                </Card>                
                            </Grid>
                        )
                    }): null}
                </Stack>
            </Grid>
        </Layout>
    )
}