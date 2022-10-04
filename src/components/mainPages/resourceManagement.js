import React, { useState, useEffect, useContext } from "react"
import { useForm, Controller } from "react-hook-form";
import { appStore, onAppMount } from '../../state/app'

//Components
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import UploadFileIcon from '@mui/icons-material/UploadFile'
import useMediaQuery from '@mui/material/useMediaQuery'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const axios = require('axios').default

export default function ResourceManagement(props) {

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
          <Box sx={{ width: '100%', height: '100vh', bgcolor: 'white', marginTop: '40px', paddingTop:'30px' }}>
          {!matches ? (
            <Grid container alignItems="center" justifyContent="center">
            <Stack direction="column" alignItems="center">
            <div>
          
            <Button variant="contained" component="label" startIcon={<UploadFileIcon />}>
                Upload Image
                <input hidden accept="image/*, file/pdf" multiple type="file" onChange={handleImageUploadtoStorage} />
            </Button>
            <img src={imageUrl} style={{maxWidth: '50px'}} />
            <form onSubmit={handleSubmit(handleImageRecordCreation)}>
            <label for="imageTitle">Title</label>
              <input {...methods.register("imageTitle")} type="text" name="imageTitle"/>
            <label for="description">Description</label>
              <input {...methods.register("description")}type="text" name="description"/>
              <Typography variant="overline">Image Url: {imageUrl ? imageUrl : 'upload image first'}</Typography>
            <label for="category">Category</label>
              <input {...methods.register("category")} type="text" name="category"/>
              <input type="submit" value="Submit" />
            </form>
            </div>
            </Stack>
          </Grid>
          )
          :
          (
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
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center">
                <Stack direction="column" alignItems="center">
                <form onSubmit={handleSubmit(handleImageRecordCreation)} style={{width: '95%'}}>
                  <div>
                  <label for="imageTitle">Title</label>
                    <input {...methods.register("imageTitle")} type="text" name="imageTitle"/>
                  </div>
                  <div>
                  <label for="description">Description</label>
                    <input {...methods.register("description")}type="text" name="description"/>
                  </div>
                  <div style={{textOverflow: 'auto'}}>
                    <Typography variant="overline">Image Url: {imageUrl ? imageUrl : 'upload image first'}</Typography>
                  </div>
                  <div>
                  <label for="category">Category</label>
                    <input {...methods.register("category")} type="text" name="category"/>
                  </div>
                  <div>
                    <input type="submit" value="Submit" />
                  </div>
                </form>
                </Stack>
              </Grid>
          </Grid>
          )
          }
          </Box>
          </>
    )
}
