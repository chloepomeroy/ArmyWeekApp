import * as React from 'react'
import { useNavigate } from 'react-router-dom'

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
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { blue, green } from '@mui/material/colors'
import { t } from 'i18next'


export default function DecisionSupportMenu() {
    let navigate = useNavigate()


  return (
   <>

            <ListItem
                autoFocus
                secondaryAction={
                    <IconButton edge="end" aria-label="go">
                    <ChevronRightIcon />
                    </IconButton>
                }
                href='https://app.powerbi.com/groups/me/apps/73bd2497-f08c-4f15-a6c3-5c8be0a299b6/reports/b01ec089-7a4a-4ac1-954d-a96dbd7afaf4/ReportSection3c0a5c6ec0d58b073a87?ctid=325b4494-1587-40d5-bb31-8b660b7f1038'
                 >
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: green[100], color: green[600] }}>
                        <RadarIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary= {t("army_keystone_dash")}
                    secondary={t("army_keystone_desc")}
                />
            </ListItem>
            <ListItem
                secondaryAction={
                    <IconButton edge="end" aria-label="go">
                    <ChevronRightIcon />
                    </IconButton>
                }
            >
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: green[100], color: green[600] }}>
                        <RadarIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={t("digital_cop")}
                    secondary={t("digital_cop_desc")}
                />
            </ListItem>

            <ListItem
                secondaryAction={
                    <IconButton edge="end" aria-label="go">
                    <ChevronRightIcon />
                    </IconButton>
                }
            >
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: green[100], color: green[600] }}>
                        <NotificationsActiveIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary= {t("army_notifications_dash")}
                    secondary={t("army_notification_desc")}
                />
            </ListItem>


  </>
  );
}
