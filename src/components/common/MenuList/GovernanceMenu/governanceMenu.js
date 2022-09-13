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
import { t } from 'i18next'
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes

export default function GovernanceMenu() {

  return (
    <>

<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                    primary={t("army_governence_mgmt_dash")}
                    secondary={t("army_governence_mgmt_desc")}
=======
                    primary={t("diplomacy_desc")}
                    secondary={t("diplomacy_desc")}
>>>>>>> Stashed changes
                />
            </ListItem>

            <ListItem
                autoFocus
                secondaryAction={
                    <IconButton edge="end" aria-label="go">
                    <ChevronRightIcon />
                    </IconButton>
                }
<<<<<<< Updated upstream
                href="https://caarmydata.blob.core.windows.net/resources/20211207-U-CA_Data_Governance.pdf"
=======


>>>>>>> Stashed changes
            >
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: green[100], color: green[600] }}>
                        <StorageIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
<<<<<<< Updated upstream
                    primary={t("ca_data_governence")}
                    secondary={t("ca_data_gov_desc")}
=======
                    primary="CA Data Governance"
                    secondary="Implementation in progress"
>>>>>>> Stashed changes
                />
            </ListItem>


  </>
  );
}
