import * as React from 'react';
import { useNavigate } from 'react-router-dom'

import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { Avatar } from "@mui/material"
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import SettingsIcon from '@mui/icons-material/Settings'
import IconButton from '@mui/material/IconButton'

export default function AdminList(props) {

  let navigate = useNavigate()

  return (
    <Box sx={{ width: '100%', height: '100vh', bgcolor: 'white' }}>
        <List>
          <ListItem
            onClick={() => navigate('/admin/training')}
            secondaryAction={
              <IconButton edge="end" aria-label="go">
                <ChevronRightIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <SettingsIcon />
            </ListItemAvatar>
            <ListItemText
              primary="Training Admin"
            />
          </ListItem>     
    </List>
    </Box>
  );
}
