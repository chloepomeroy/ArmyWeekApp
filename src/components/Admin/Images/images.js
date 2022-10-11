import React, { useState, useEffect, useContext } from "react"
import { useForm } from "react-hook-form"
import { appStore } from '../../../state/app'

//Components
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import UploadFileIcon from '@mui/icons-material/UploadFile'
import useMediaQuery from '@mui/material/useMediaQuery'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'

const axios = require('axios').default

export default function Images(props) {

  const matches = useMediaQuery('(max-width:500px)')
  const { register, handleSubmit } = useForm()
  const { state, update } = useContext(appStore)

  const {
    rank,
    firstName,
    surName
  } = state

  const [allImages, setAllImages] = useState([])
  const [description, setDescription] = useState('')
  const [viewImage, setViewImage] = useState()
  const [imageUrl, setImageUrl] = useState('')
  const [imageTitle, setImageTitle] = useState('')
  const [category, setCategory] = useState('default')
  const [imageFileName, setImageFileName] = useState('')

  useEffect(() => {
    async function fetchImages(){
      let result = await axios.get('/image/get-all',{})
      console.log('result', result)
      setAllImages(result)
    }

    fetchImages()
    .then((res) => {

    })
  },[])
  console.log('allimages', allImages)

  const methods = useForm({
    mode: "onSubmit",
    defaultValues: {
      imageTitle: "",
      category: "",
      description: ""
    },
  })

  function handleImageRecordCreation() {
    const submitter = (rank ? rank : null) + ' ' + (firstName ? firstName : null) + ' ' + (surName ? surName : null)
    let values = methods.getValues()
    console.log('values', values)
    axios
      .post('/image/add', {
        imageFileName: imageFileName,
        imageTitle: values.imageTitle,
        description: values.description,
        submitter: submitter,
        category: values.category,
        link: imageUrl
      })
      .then(res => {
        // Handle the response...
        console.log('res', res)
      })
      .catch(err => console.log(err));
  }

  const handleImageUploadtoStorage = (e) => {
    const dataForm = new FormData();
    console.log('e', e)
    dataForm.append('file', e.target.files[0])
    setImageFileName(e.target.files[0].filename)
    let imageUrl = axios
      .post('/image/add-to-storage', dataForm)
      .then(res => {
        // Handle the response...
        console.log('res', res)
        setImageUrl(res.data)
      })
      .catch(err => console.log(err));
  }

    return ( 
          <>
          {!matches ? (
            <>
            <Grid container alignItems="center" justifyContent="flex-start" spacing={1}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center">
                <Button variant="contained" component="label" startIcon={<UploadFileIcon />}>
                  Upload Image
                  <input hidden accept="image/*, file/pdf" multiple type="file" onChange={handleImageUploadtoStorage} />
                </Button>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center">
                <img src={imageUrl} style={{maxWidth: '75%'}} />
              </Grid>
            </Grid>
            <Card style={{margin: '5px', padding: '5px'}}>
            <form onSubmit={handleSubmit(handleImageRecordCreation)}>
            <Grid container alignItems="left" justifyContent="flex-start" spacing={1}>
              <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                <label for="imageTitle">Title</label>
              </Grid>
              <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
                <input {...methods.register("imageTitle")} type="text" name="imageTitle"/>
              </Grid>
              <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                <label for="description">Description</label>
              </Grid>
              <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
                <input {...methods.register("description")}type="text" name="description"/>
              </Grid>
              <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                <label for="category">Category</label>
              </Grid>
              <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
                <input {...methods.register("category")} type="text" name="category"/>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center">
                <input type="submit" value="Submit" />
              </Grid>
            </Grid>
            </form>
            </Card>
            </>
          )
          :
          (
            <>
            <Grid container alignItems="center" justifyContent="flex-start" spacing={1}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center">
                <Button variant="contained" component="label" startIcon={<UploadFileIcon />}>
                  Upload Image
                  <input hidden accept="image/*, file/pdf" multiple type="file" onChange={handleImageUploadtoStorage} />
                </Button>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center">
                <img src={imageUrl} style={{maxWidth: '75%'}} />
              </Grid>
            </Grid>
            <Card style={{margin: '5px', padding: '5px'}}>
            <form onSubmit={handleSubmit(handleImageRecordCreation)}>
            <Grid container alignItems="left" justifyContent="flex-start" spacing={1}>
              <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                <label for="imageTitle">Title</label>
              </Grid>
              <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
                <input {...methods.register("imageTitle")} type="text" name="imageTitle"/>
              </Grid>
              <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                <label for="description">Description</label>
              </Grid>
              <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
                <input {...methods.register("description")}type="text" name="description"/>
              </Grid>
              <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                <label for="category">Category</label>
              </Grid>
              <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
                <input {...methods.register("category")} type="text" name="category"/>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center">
                <input type="submit" value="Submit" />
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
