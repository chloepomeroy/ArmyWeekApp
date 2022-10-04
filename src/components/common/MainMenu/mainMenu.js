import React, { useState, forwardRef } from 'react'

import MicrosoftLogoutButton from '../MicrosoftLogOutButton/microsoftLogoutButton'
import DecisionSupportMenu from '../MenuList/DecisionSupportMenu/decisionSupportMenu'
import GovernanceMenu from '../MenuList/GovernanceMenu/governanceMenu'
import ModernizationMenu from '../MenuList/ModernizationMenu/modernizationMenu'
import PolicyRegsMenu from '../MenuList/PolicyRegsMenu/policyRegsMenu'
import AdministrationMenu from '../MenuList/AdministrationMenu/administrationMenu'
import DiplomacyMenu from '../MenuList/DiplomacyMenu/diplomacyMenu'
import DigLiteracyMenu from '../MenuList/DigitalLiteracyMenu/digLiteracyMenu'

// Styling
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import { DialogActions, ListSubheader } from '@mui/material'
import Slide from '@mui/material/Slide'
import Button from '@mui/material/Button'
import CloseIcon from '@mui/icons-material/Close';
import List from '@mui/material/List'
import { useTranslation } from "react-i18next"

const Transition = forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function MainMenu (props) {

  const {
    handleMenuClickState,
    } = props
   
  const { t, i18n } = useTranslation()

  const [open, setOpen] = useState(true)

  const handleClose = () => {
    handleMenuClickState(false)
  }

  const handleListItemClick = (value) => {
    handleClose()
  }



  return (
    <div>
    <Dialog
      open={open}
      TransitionComponent={Transition}
      fullScreen
      keepMounted
      onClose={handleClose}
    >

        <CloseIcon
          style={{
            position: 'absolute',
            top: '5px',
            right: '5px',
            zIndex: 5000
          }}
          onClick={handleClose}
        />
        <List
          subheader=""
        >
        </List>
        <List
          subheader={<ListSubheader>{t("decision_support_proj")}</ListSubheader>}
        >
          <DecisionSupportMenu />
        </List>
        <List
          subheader={<ListSubheader>{t("governence_proj")}</ListSubheader>}
        >
          <GovernanceMenu />
        </List>
        <List
          subheader={<ListSubheader>{t("modernization_proj")}</ListSubheader>}
        >
          <ModernizationMenu />
        </List>
        <List
          subheader={<ListSubheader>{t("digital_data_literacy")}</ListSubheader>}
        >
          <DigLiteracyMenu />
        </List>
        <List
          subheader={<ListSubheader>{t("diplomacy_proj")}</ListSubheader>}
        >
          <DiplomacyMenu />
        </List>
        <List
          subheader={<ListSubheader>{t("administration")}</ListSubheader>}
        >
          <AdministrationMenu />
        </List>
        <List
          subheader={<ListSubheader>{t("policy_regs_proj")}</ListSubheader>}
        >
          <PolicyRegsMenu />
        </List>

      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
    </div>
  )
}
