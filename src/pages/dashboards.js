import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import { PowerBIEmbed } from 'powerbi-client-react';
// import { models } from 'powerbi-client';

//Components
import Layout from "../components/layout";
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { t} from "i18next";
import { useTranslation } from "react-i18next";


export default function Metrics() {
    const { i18n } = useTranslation();

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
        <Layout pageTitle={t("dashboards_pagetitle")}>

            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid container spacing={5} alignItems="flex-start" justifyContent="left" mt={5} mr={5} ml={5} mb={5} sx={{display: { xs: 'none', md: 'flex' }}}>
        
                    {t("dashboard_list", { returnObjects: true }).map(db => {
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
                                        <Button size="small" href={db.embed_url}>{t("dashboards_view")}</Button>
                                    </CardActions>
                                </Card>                
                            </Grid>
                        )
                    })}
                </Grid>

{/* Mobile */}
                <Stack  direction="column"  justifyContent="flex-start"  alignItems="center"  spacing={4} mb={7} sx={{display: { xs: 'flex', md: 'none' }}} mt={5}>
                    {t("dashboard_list", { returnObjects: true }).map(db => {
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
                                        <Button size="small" href={db.embed_url}>{t("dashboards_view")}</Button>
                                    </CardActions>
                                </Card>                
                            </Grid>
                        )
                    })}
                </Stack>
            </Grid>
        </Layout>
    )
}