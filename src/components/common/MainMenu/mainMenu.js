import React, { useState, forwardRef } from 'react'

import MicrosoftLogoutButton from '../MicrosoftLogOutButton/microsoftLogoutButton'
import DecisionSupportMenu from '../MenuList/DecisionSupportMenu/decisionSupportMenu'
import GovernanceMenu from '../MenuList/GovernanceMenu/governanceMenu'
import ModernizationMenu from '../MenuList/ModernizationMenu/modernizationMenu'
import PolicyRegsMenu from '../MenuList/PolicyRegsMenu/policyRegsMenu'
import AdministrationMenu from '../MenuList/AdministrationMenu/administrationMenu'
import DiplomacyMenu from '../MenuList/DiplomacyMenu/diplomacyMenu'

// Styling
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import { DialogActions, ListSubheader } from '@mui/material'
import Slide from '@mui/material/Slide'
import Button from '@mui/material/Button'
import CloseIcon from '@mui/icons-material/Close';
import List from '@mui/material/List'

const Transition = forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function MainMenu (props) {

  const { 
    handleMenuClickState,
    } = props

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
          subheader={<ListSubheader>DECISION SUPPORT</ListSubheader>}
        >
          <DecisionSupportMenu />
        </List>
        <List
          subheader={<ListSubheader>GOVERNANCE</ListSubheader>}
        >
          <GovernanceMenu />
        </List>
        <List
          subheader={<ListSubheader>MODERNIZATION</ListSubheader>}
        >
          <ModernizationMenu />
        </List>
        <List
          subheader={<ListSubheader>DIPLOMACY</ListSubheader>}
        >
          <DiplomacyMenu />
        </List>
        <List
          subheader={<ListSubheader>ADMINISTRATION</ListSubheader>}
        >
          <AdministrationMenu />
        </List>
        <List
          subheader={<ListSubheader>POLICY & REGS</ListSubheader>}
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
