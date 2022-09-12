import React from 'react'
import SettingsList from '../common/SettingsList/settingsList'

// Material UI Components
import Grid from '@mui/material/Grid'
import useMediaQuery from '@mui/material/useMediaQuery'
import Box from '@mui/material/Box'

export default function Settings (props) {
   
    const matches = useMediaQuery('(max-width:500px)')

    const {
       state
    } = props

    return (
        <Box sx={{ width: '100%', height: '100vh', bgcolor: 'white', marginTop: '40px', paddingTop: '30px' }}>
            <Grid container alignItems="center" justifyContent="space-between" style={{width: '100%'}}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                    <SettingsList graphData={state.graphData} graphPhoto={state.graphPhotoData} username={state.graphData.displayName}/>
                </Grid>
            </Grid>
        </Box>
    )
}