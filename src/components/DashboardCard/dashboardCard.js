import React, {useState, useEffect} from "react"
import LocalizedStrings from 'react-localization';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

let strings = new LocalizedStrings({
    en: {view: "View",
    },
    fr: {view: "Affichez", 
    }
  })

export default function DashboardCard({title, description, file_title, embed_url}) {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <iframe title={file_title} width="500" height="300" src={embed_url} frameborder="0" allowFullScreen="true"></iframe>
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