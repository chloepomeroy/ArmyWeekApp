import * as React from 'react'

// Styling
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { Avatar } from "@mui/material"
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListSubheader from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import IconButton from '@mui/material/IconButton'
import RadarIcon from '@mui/icons-material/Radar'
import ArticleIcon from '@mui/icons-material/Article';
import CloudIcon from '@mui/icons-material/Cloud';
import { blue, green } from '@mui/material/colors'

export default function PolicyRegsMenu() {


  return (
   <>
            <ListItem 
            autoFocus
            secondaryAction={
                <IconButton edge="end" aria-label="go">
                <ChevronRightIcon />
                </IconButton>
            }
            >
            <ListItemAvatar>
                <Avatar sx={{ bgcolor: green[100], color: green[600] }}>
                    <CloudIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText 
                primary="Digital Policy Placemat" 
                secondary="Understand the Digital Landscape (ETA Sep 22)"
            />
            </ListItem>
            <ListItem 
                autoFocus
                secondaryAction={
                    <IconButton edge="end" aria-label="go">
                    <ChevronRightIcon />
                    </IconButton>
                }
                href="https://www.canada.ca/en/department-national-defence/corporate/policies-standards/canforgens.html"
            >
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: green[100], color: green[600] }}>
                        <ArticleIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText 
                    primary="CAF Orders and Directives" 
                    secondary="CANFORGENs, DAODs, QR&Os"
                />
            </ListItem>
   
  </>
  );
}
