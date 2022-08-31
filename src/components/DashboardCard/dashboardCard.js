import React, {useState, useEffect} from "react"
import LocalizedStrings from 'react-localization';
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

let strings = new LocalizedStrings({
    en: {view: "View",
    },
    fr: {view: "Affichez", 
    }
  })

export default function DashboardCard({title, description, db_img, embed_url}) {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <GatsbyImage image={db_img} alt={title}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={embed_url}>{strings ? strings.view: null}</Button>
      </CardActions>
    </Card>
  );
}