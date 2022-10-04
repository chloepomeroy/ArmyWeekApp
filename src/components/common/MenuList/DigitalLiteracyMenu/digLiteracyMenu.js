import * as React from 'react'

// Styling
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { Avatar } from "@mui/material"
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import IconButton from '@mui/material/IconButton'
import AutoGraphIcon from '@mui/icons-material/AutoGraph'
import AnalyticsIcon from '@mui/icons-material/Analytics'
import Groups2Icon from '@mui/icons-material/Groups2'
import StorageIcon from '@mui/icons-material/Storage'
import { blue, green } from '@mui/material/colors'

export default function DigLiteracyMenu() {

  return (
   <>
            <ListItem 
            autoFocus
            secondaryAction={
                <IconButton edge="end" aria-label="go" href="/executive-training">
                <ChevronRightIcon />
                </IconButton>
            }
            >
            <ListItemAvatar>
                <Avatar sx={{ bgcolor: green[100], color: green[600] }}>
                    <Groups2Icon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText 
                primary="Executive Education" 
                secondary="Data and digital technology education for leaders."
            />
            </ListItem>
            <ListItem 
                autoFocus
                secondaryAction={
                    <IconButton edge="end" aria-label="go"  href="/foundational-training">
                    <ChevronRightIcon />
                    </IconButton>
                }
            >
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: green[100], color: green[600] }}>
                        <AnalyticsIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText 
                    primary="Foundational Training" 
                    secondary="Data and digital basics, analytics, statistics, and tools."
                />
            </ListItem>
            <ListItem 
                autoFocus
                secondaryAction={
                    <IconButton edge="end" aria-label="go"  href="/intermediate-training">
                    <ChevronRightIcon />
                    </IconButton>
                }
            >
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: green[100], color: green[600] }}>
                        <AutoGraphIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText 
                    primary="Intermediate Training" 
                    secondary="Level up with AI, ML, data analysis, modelling, and visualization."
                />
            </ListItem>
            <ListItem 
                autoFocus
                secondaryAction={
                    <IconButton edge="end" aria-label="go"  href="/advanced-training">
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
                    primary="Advanced Training" 
                    secondary="Learn and lead the Army's data/digital development into the future."
                />
            </ListItem>
   
  </>
  );
}
