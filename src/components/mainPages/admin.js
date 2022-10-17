import React, { useState, useEffect, useContext } from "react"
import { useForm, Controller } from "react-hook-form"
import { appStore, onAppMount } from '../../state/app'

import AdminList from "../common/SettingsList/adminList"


import Images from '../Admin/Images/images'
import Training from '../Admin/Training/training'

//Components
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import UploadFileIcon from '@mui/icons-material/UploadFile'
import useMediaQuery from '@mui/material/useMediaQuery'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'

const axios = require('axios').default

export default function Administration(props) {

  const matches = useMediaQuery('(max-width:500px)')
  const { register, handleSubmit } = useForm()
  const { state, update } = useContext(appStore)

    return ( 
      <Box sx={{ width: '100%', height: '100vh', bgcolor: 'white', marginTop: '40px', paddingTop: '30px' }}>
        <Grid container alignItems="center" justifyContent="space-between" style={{width: '100%'}}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                <AdminList />
            </Grid>
        </Grid>
      </Box>
    )
}
