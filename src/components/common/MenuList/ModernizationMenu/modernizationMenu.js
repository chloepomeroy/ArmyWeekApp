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
import { blue, green } from '@mui/material/colors'
import { useTranslation } from "react-i18next"

import brainBulb from '../../../../img/brainbulbicon.png'

export default function ModernizationMenu() {

const { t, i18n } = useTranslation()

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
                    <Avatar src={brainBulb} sx={{ bgcolor: green[100], color: green[600] }} />
                </ListItemAvatar>
                <ListItemText
                    primary= {t("dip")}
                    secondary={t("dip_desc")}
                />
            </ListItem>


  </>
  );
}
