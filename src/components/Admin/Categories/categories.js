import React, { useState, useEffect, useContext } from "react"
import { useForm } from "react-hook-form"
import { appStore } from '../../../state/app'

//Components
import Grid from '@mui/material/Grid'
import useMediaQuery from '@mui/material/useMediaQuery'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'

const axios = require('axios').default

export default function TrainingCategories(props) {

  const matches = useMediaQuery('(max-width:500px)')
  const { register, handleSubmit } = useForm()
  const { state, update } = useContext(appStore)

  const [allCategories, setAllCategories] = useState([])

  useEffect(() => {
    async function fetchCategories(){
      let result = await axios.get('/category/get-all',{})
      console.log('result', result)
      setAllCategories(result)
    }

    fetchCategories()
    .then((res) => {

    })
  },[])
  console.log('allcategories', allCategories)

  const methods = useForm({
    mode: "onSubmit",
    defaultValues: {
      name: ""
    },
  })

  function handleCategoryRecordCreation() {
    let values = methods.getValues()
    axios
      .post('/category/add', {
        name: values.name
      })
      .then(res => {
        // Handle the response...
        console.log('res', res)
      })
      .catch(err => console.log(err));
  }

  return ( 
    <>
    {!matches ? 
    (
        <>
        <Card style={{margin: '5px', padding: '5px'}}>
        <form onSubmit={handleSubmit(handleCategoryRecordCreation)}>
        <Grid container alignItems="left" justifyContent="flex-start" spacing={1}>
            <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
            <label for="name">Category Name</label>
            </Grid>
            <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
            <input {...methods.register("name")} type="text" name="name"/>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center">
            <input type="submit" value="Add Category" />
            </Grid>
        </Grid>
        </form>
        </Card>
        </>
    )
    :
    (
        <>
        <Card style={{margin: '5px', padding: '5px'}}>
        <form onSubmit={handleSubmit(handleCategoryRecordCreation)}>
        <Grid container alignItems="left" justifyContent="flex-start" spacing={1}>
            <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
            <label for="name">Category Name</label>
            </Grid>
            <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
            <input {...methods.register("name")} type="text" name="name"/>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center">
            <input type="submit" value="Add Category" />
            </Grid>
        </Grid>
        </form>
        </Card>
        </>
    )
    }
    </>
)
}