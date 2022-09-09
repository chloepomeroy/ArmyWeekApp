import React, { useState, useEffect, useContext } from 'react'
import { get, set, del } from '../../utils/storage'
import { appStore, onAppMount } from '../../state/app'
import { flexClass } from '../../App'
import SeedSetup from '../SeedSetup/seedSetup'
import IndivProfile from '../Profiles/indivProfile'
import GuildProfile from '../Profiles/guildProfile'
import UnregisteredProfile from '../Profiles/unregisteredProfile'
import RandomPhrase from '../common/RandomPhrase/randomPhrase'
import Landing from './landing'
import Splash from './splash'
import { KEY_REDIRECT } from '../../utils/ceramic'

// Material UI & styling
import { makeStyles } from '@mui/styles'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import Grid from '@mui/material/Grid'

import '../../global.css'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column'
      },
      centered: {
        width: '200px',
        height: '100px',
        textAlign: 'center',
        position: 'fixed',
        top: '50%',
        left: '50%',
        marginTop: '-100px',
        marginLeft: '-100px'
      },
  }));

export default function HomePage (props) {

    const { state, update } = useContext(appStore)
   
    const {
        wallet, 
        finished,
        key,
        accountType,
        isUpdated
    } = state
    
    const classes = useStyles();

    useEffect(
        () => {
           
    }, []
    )
   
    return (
    <>
        {finished ?
            <Grid container alignItems="center" justifyContent="space-evenly" spacing={1}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center">
                    <Button>
                        Submit Idea
                    </Button>
                </Grid>
            </Grid>
            : 
            (
            <div className={classes.centered}>
                <CircularProgress/><br></br>
                <Typography variant="h6">Preparing...</Typography><br></br>
                <RandomPhrase />
            </div>
            )
        }        
    </>
    )
}
