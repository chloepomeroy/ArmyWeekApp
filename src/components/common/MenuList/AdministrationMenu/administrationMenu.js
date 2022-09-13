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
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { blue, green } from '@mui/material/colors'
import { t } from 'i18next'

export default function AdministrationMenu() {

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
                        <ManageAccountsIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
		            primary={t("proj_dna")}
                    secondary={t("proj_dna_desc")}
                />
            </ListItem>


  </>
  );
}
