import React, { useState, useEffect, useContext } from 'react'
import { appStore, onAppMount } from '../../state/app'
import { STORAGE, GAS, parseNearAmount } from '../../state/near'

// Material UI components
import { makeStyles } from '@mui/styles'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import Divider from '@mui/material/Divider'
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle'
import StarsIcon from '@mui/icons-material/Stars'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      position: 'relative',
      display: 'flex',
      flexDirection: 'column'
    },
    spacing: {
        marginTop: '15px',
        marginBottom: '15px'
    },
  }));
  
export default function GuildRegister(props) {

    const classes = useStyles()

    const { state, dispatch, update } = useContext(appStore)

    const {
      didRegistryContract,
      accountId,
      did,
      accountType
    } = state

    useEffect(
        () => {
          let urlVariables = window.location.search
          const urlParameters = new URLSearchParams(urlVariables)
          let transactionHash = urlParameters.get('transactionHashes')
          accountType != undefined && transactionHash ? window.location.assign('/create-guild-profile') : null
    }, [accountType]
    )

   async function onSubmit(){
      if(did){
        try{
          await didRegistryContract.putDID({
            accountId: accountId,
            did: did,
            type: 'guild'
          }, GAS, parseNearAmount((parseFloat(STORAGE)).toString()))
        } catch (err) {
          console.log('error registering', err)
        }
      }
    }

    function handleNo(){
      window.location.assign('/create-guild-profile')
    }
    
    return (
        <>
        <Grid container spacing={1} style={{padding: '10px'}}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center">
          <Typography variant="h4" style={{marginTop:'40px', marginBottom: '40px'}}>To be found or not to be found?</Typography>
          <Typography variant="h6" style={{marginTop:'40px'}}>Decide if you want to register your guild.</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3} xl={3} ></Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
          <List>
              <ListItem className={classes.spacing}>
                <ListItemIcon>
                  <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Showcases your guild and is the first step towards obtaining verified status."
                />
              </ListItem>
              <Divider variant="middle" />
              <ListItem className={classes.spacing}>
                <ListItemIcon>
                  <SupervisedUserCircleIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Enables guild discoverability - making it easier for people to find, join, and participate in your guild."
                />
              </ListItem>
              <Divider variant="middle" />
              <ListItem className={classes.spacing}>
              <ListItemIcon>
                <StarsIcon />
              </ListItemIcon>
              <ListItemText
                primary="Allows your guild to show up on leaderboards and be eligible for reputation based rewards."
              />
            </ListItem>
            <Divider variant="middle" />
          </List>
          <Grid container spacing={1} style={{padding: '10px'}}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center">
              <Button className={classes.spacing} style={{float: 'left', marginTop: '20px', marginRight: '15px'}} variant="contained" color="primary" onClick={onSubmit}>
                Register
              </Button>
              <Typography variant="body2" style={{marginTop: '30px'}}>
                You can unregister at any time.
              </Typography>
              <div style={{clear:'both'}} />
              <Button
                color="secondary"
                style={{marginTop: '20px'}}
                onClick={handleNo}
              >
                No Thanks
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3} xl={3} ></Grid>
      </Grid>
        </>
        
    )
}