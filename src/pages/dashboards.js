import React, {useState, useEffect} from "react"
import LocalizedStrings from 'react-localization';
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import { PowerBIEmbed } from 'powerbi-client-react';
// import { models } from 'powerbi-client';

//Components
import Layout from "../components/layout";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
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

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

let dashboard_list = [
    {"title": "Canadian Army Modernization Strategy",
    "description": "Tracking progress of initiatives and sub-initiatives on the road to modernization.",
    "file_title": "CAMS Placemat Desktop",
    "embed_url": "https://app.powerbi.com/reportEmbed?reportId=0cdaec13-9fa7-425f-bd70-6b21a74a7f94&autoAuth=true&ctid=325b4494-1587-40d5-bb31-8b660b7f1038",
    "img": "camsss.JPG"
    },
    {"title": "Army 101 Dashboard",
    "description": "Dashboards and placemats that describe the Canadian Army and its structure.",
    "file_title": "Army 101",
    "embed_url": "https://app.powerbi.com/reportEmbed?reportId=12d0edf4-365c-4965-9892-c29be534591c&autoAuth=true&ctid=325b4494-1587-40d5-bb31-8b660b7f1038",
    "img": "army101ss.JPG"
    },
    {"title": "CA Interactive Org Chart",
    "description": "See how the CA is structured and where the various organizations are located.",
    "file_title": "CA Org Structure",
    "embed_url": "https://app.powerbi.com/reportEmbed?reportId=789dcf29-c678-4725-8206-c5d0aaaa62e4&autoAuth=true&ctid=325b4494-1587-40d5-bb31-8b660b7f1038",
    "img": "orgstructss.JPG"
    },
    {"title": "Commander and Senior Leader Dashboard",
    "description": "Peruse the Commander and Senior Leader Bios of the CA.",
    "file_title": "CA General Officers",
    "embed_url": "https://app.powerbi.com/reportEmbed?reportId=98a139c3-e995-41a5-9acf-bcfdf554e6f2&autoAuth=true&ctid=325b4494-1587-40d5-bb31-8b660b7f1038",
    "img": "CAGenOffss.JPG"
    }
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
          maxWidth: `600`,
          padding: `var(--size-gutter)`,
        }}
      >
        <Item>
        <h1>{strings? strings.pagetitle: null}</h1>
        </Item> 
        <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid container spacing={5} alignItems="center" justifyContent="left" mt={5} mr={5} ml={5} mb={5} sx={{display: { xs: 'none', md: 'flex' }}}>
        
        {dashboard_list ? dashboard_list.map(db => {
            let db_img
              if(db && db.img){
                db_img = data.img.edges.filter(edges => edges.node.relativePath === db.img)
              }
            return(
                <Grid item xs={4}>
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
        </Grid>


        {/* <Grid container spacing={5} alignItems="center" justifyContent="left" mt={5} mr={5} ml={5} mb={5} sx={{display: { xs: 'flex', md: 'none' }}}> */}
        <Stack  direction="column"  justifyContent="flex-start"  alignItems="center"  spacing={4} sx={{display: { xs: 'flex', md: 'none' }}} mt={5}>
        {dashboard_list ? dashboard_list.map(db => {
            let db_img
              if(db && db.img){
                db_img = data.img.edges.filter(edges => edges.node.relativePath === db.img)
              }
            return(
                <Grid item xs={9}>
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
        {/* </Grid> */}
        </Grid>
        </div>
        </Layout>
    )
}