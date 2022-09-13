import * as React from 'react';

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
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { blue, green } from '@mui/material/colors'
import StorageIcon from '@mui/icons-material/Storage'

export default function GovernanceMenu() {

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
                        <CalendarMonthIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText 
                    primary="Army Governance Management System" 
                    secondary="V2 Coming Soon... (ETA: 2023)"
                />
            </ListItem>

            <ListItem 
                autoFocus
                secondaryAction={
                    <IconButton edge="end" aria-label="go" href="https://caarmydata.blob.core.windows.net/resources/20211207-U-CA_Data_Governance.pdf">
                    <ChevronRightIcon />
                    </IconButton>
                }
               
                
            >
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: green[100], color: green[600] }}>
                        <StorageIcon />                    
                    </Avatar>
                </ListItemAvatar>
                <ListItemText 
                    primary="CA Data Governance" 
                    secondary="Implementation in progress"
                />
            </ListItem>
   
       
  </>
  );
}