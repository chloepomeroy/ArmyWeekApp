import React, { useState, useContext, useEffect } from 'react'
import { appStore, onAppMount } from './state/app'
import { get, set, del } from './utils/storage'
import { Routes, Route, useParams } from "react-router-dom"
import { useMsal, AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { ceramic } from './utils/ceramic'
import { callMsGraph, callMsGraphPhoto, callMsGraphCalendar } from '../graph';
import { loginRequest } from "../authConfig";
import { motion } from 'framer-motion'

import Splash from './components/mainPages/splash'
import IndexPage from './components/mainPages/index'
import Cal from './components/mainPages/calendar'
import Venue from './components/mainPages/venue'
import Dashboards from './components/mainPages/dashboards'
import SelectedEvent from './components/mainPages/selectedEvent'
import Support from './components/mainPages/support'
import Resources from './components/mainPages/resources'
import Administration from './components/mainPages/admin'
import Settings from './components/mainPages/settings'
import RandomPhrase from './components/common/RandomPhrase/randomPhrase'
import BottomAppBar from './components/common/BottomAppBar/bottomAppBar'
import HeaderMenu from './components/common/HeaderMenu/headerMenu'
import UpArrow from './components/common/UpArrow/upArrow'

// Material-UI Components
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import useMediaQuery from '@mui/material/useMediaQuery'
import Box from '@mui/material/Box'

const axios = require('axios').default

// helpers
export const btnClass = 'btn btn-sm btn-outline-primary mb-3 '
export const flexClass = 'd-flex justify-content-evenly align-items-center '
export const qs = (s) => document.querySelector(s)

const App = () => {
   
    const { state, dispatch, update } = useContext(appStore)
    const [isSignedIn, setIsSignedIn] = useState(false)

    const matches = useMediaQuery('(max-width:500px)')

    const onMount = () => {
        dispatch(onAppMount())
    }

    const { instance, accounts } = useMsal()
    
    useEffect(() => {

        async function fetchData(){
            try{
                
                let keypair = false
                let user
                if(accounts && instance){
                    //  keypair = await ceramic.getVaultKeyPair(accounts[0].username)
                    //  if(!keypair){
                    //      let result = await ceramic.setVaultKeyPair(accounts[0].username)
                    //  }
                    setIsSignedIn(true)

                    // Get ECN profile data
                    const request = {
                        ...loginRequest,
                        account: accounts[0]
                    }

                    let photo
                    let personData
                    let calendarData
                    // Silently acquires an access token which is then attached to a request for Microsoft Graph data
                    try {
                        let response = await instance.acquireTokenSilent(request)
                  //      console.log('person response', response)
                        if(response){
                            personData = await callMsGraph(response.accessToken)
                        }
                    } catch (err) {
                        console.log('err', err)
                        let response = await instance.acquireTokenRedirect(request)
                  //      console.log('person error response', response)
                        if(response){
                            personData = await callMsGraph(response.accessToken)
                        }
                    }
                
                    try {
                        let response = await instance.acquireTokenSilent(request)
                  //      console.log('photo response', response)
                        if(response){
                            photo = await callMsGraphPhoto(response.accessToken)
                        }
                        } catch (err) {
                            console.log('err', err)
                            let response = await instance.acquireTokenRedirect(request)
                  //          console.log('photo err response', response)
                            if(response){
                                photo = await callMsGraphPhoto(response.accessToken)
                            }
                    }

                    // try {
                    //     let response = await instance.acquireTokenSilent(request)
                    //     console.log('calendar response', response)
                    //     if(response){
                    //         calendarData = await callMsGraphCalendar(response.accessToken)
                    //     }
                    //     } catch (err) {
                    //         console.log('err', err)
                    //         let response = await instance.acquireTokenRedirect(request)
                    //         console.log('calendar err response', response)
                    //         if(response){
                    //             calendarData = await callMsGraphCalendar(response.accessToken)
                    //         }
                    // }

                //    let connection = await ceramic.openDBConnection(personData.mail)
                  
                    // Update state with data
                    update('', {
                        microsoftAccount: accounts,
                        rank: personData.jobTitle,
                        surName: personData.surname,
                        firstName: personData.givenName,
                        isSignedIn: true, 
                        graphData: personData, 
                        graphPhotoData: photo,
                       // calendar: await calendarData.json()
                    })
                }
                
            } catch (err) {
                console.log('error retrieving account', err)
            }
        }

        accounts ? 
            accounts.length > 0 ? 
                fetchData()
                .then(() => {
                    
                })
            : null 
        : null
        
    }, [accounts, instance])

    useEffect(onMount, []);

    window.onerror = function (message, url, lineNo) {
        alert('Error: ' + message + 
       '\nUrl: ' + url + 
       '\nLine Number: ' + lineNo);
    return true;   
    }    
    
    const {
        accountData
    } = state
    
    let children = null

    if (!accountData) {
        children = (<>
        <Box sx={{width: '200px',
        height: '100px',
        textAlign: 'center',
        position: 'fixed',
        top: '50%',
        left: '50%',
        marginTop: '-100px',
        marginLeft: '-100px'}}>
            <CircularProgress/><br></br>
            <Typography variant="h6">Setting Things Up...</Typography>
        </Box>
        <Box sx={{ maxWidth: '450px',
        height: '100px',
        textAlign: 'center',
        position: 'fixed',
        top: '50%',
        left: '50%',
        marginTop: '-80px',
        marginLeft: '-100px'}}>
            <RandomPhrase />
        </Box></>)
    }
    
    return(
        <>
        <UnauthenticatedTemplate>
        <HeaderMenu signedIn={isSignedIn} />
        <UpArrow />
        <Box sx={{ flexGrow: 1,
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            backgroundColor: '#58714C'
        }}>
        <Grid container alignItems="center" justifyContent="center" >
            <Grid item align="center" sx={{width: '100%'}}>
                <Routes>
                    <Route exact path="/" element={<Splash state={state}/>}/>
                </Routes>
            </Grid>
        </Grid>
        </Box>
        </UnauthenticatedTemplate>

        <AuthenticatedTemplate>
        <HeaderMenu signedIn={isSignedIn} />
        <UpArrow />
        <Box sx={{ 
            flexGrow: 1,
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#58714C',
            height: '100vh'
        }}
        >
        <Grid container alignItems="center" justifyContent="center">
            <Grid item align="center" sx={{width: '100%'}}>
            <Routes>
                <Route path="/" element={<IndexPage state={state}/>}/>
                <Route path="calendar" element={<Cal state={state}/>}/> 
                <Route path="admin" element={<Administration />}/>
                <Route path="settings" 
                    element={
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                        >
                            <Settings state={state}/>      
                        </motion.div>
                    }
                />
                <Route path="venue" element={<Venue state={state}/>}/>
                <Route path="support" element={<Support state={state}/>}/>
                <Route path="dashboards" element={<Dashboards state={state}/>}/>
                <Route path="resources" element={<Resources state={state}/>}/>            
                <Route path="event/:eventId" element={<SelectedEvent state={state}/>}/>
            </Routes>
           </Grid>
        </Grid>
        </Box> 
        <BottomAppBar />
        </AuthenticatedTemplate>

        </>
       
    )
}

export default App
