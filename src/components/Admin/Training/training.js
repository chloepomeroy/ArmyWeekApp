import React, { useState, useEffect, useContext } from "react"
import { useForm, Controller } from "react-hook-form"
import { appStore } from '../../../state/app'

//Components
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import UploadFileIcon from '@mui/icons-material/UploadFile'
import useMediaQuery from '@mui/material/useMediaQuery'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Input from '@mui/material/Input'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import { FormHelperText } from '@mui/material'
import LinearProgress from '@mui/material/LinearProgress'
import Chip from '@mui/material/Chip'

const axios = require('axios').default

export default function Training(props) {

  const matches = useMediaQuery('(max-width:500px)')
  const { state, update } = useContext(appStore)

  const {
    rank,
    firstName,
    surName
  } = state

  const { control, handleSubmit, reset, register, getValues } = useForm({
    defaultValues: {
      title: "",
      description: "",
      subject: {},
      skills: [],
      level: "",
      duration: "",
      learningPathway: [],
      trainingLink: "",
      educator: ""
    },
  })

  const [allTraining, setAllTraining] = useState([])

  const [imageFileName, setImageFileName] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [uploading, setUploading] = useState(false)

  console.log('imageUrl', imageUrl)
  console.log('uploading', uploading)
  // Should consider moving these hardcoded objects into the database
  // providing an admin ability to add to/delete/reorder them

  const subjectList = [
    { value:"dataScience", label: "Data Science" },
    { value:"dataFoundations", label: "Data Foundations" },
    { value:"artificialIntelligence", label: "Artificial Intelligence" },
    { value: "machineLearning", label: "Machine Learning" },
    { value: "dataAnalytics", label: "Data Analytics" },
    { value: "governance", label: "Governance" }
  ]

  const levelList = [
    "Executive",
    "Beginner",
    "Intermediate",
    "Advanced",
    "Mixed"
  ]

  const durationList = [
    "< 1 hour",
    "1-2 hours",
    "< 6 hours",
    "1 day",
    "2-3 days",
    "< 1 week",
    "1-3 weeks",
    "1 month",
    "2-3 months",
    "3-6 months",
    "6-12 months",
    "1-4 years"
  ]

  const pathwayList = [
    "Data Foundations",
    "AI and ML",
  ] 

  useEffect(() => {
    async function fetchTraining(){
      let result = await axios.get('/training/get-all',{})
      console.log('result', result)
      setAllTraining(result)
    }

    fetchTraining()
    .then((res) => {

    })
  },[])
  console.log('allTraining', allTraining)

  

  function handleTrainingRecordCreation() {
    const submitter = (rank ? rank : null) + ' ' + (firstName ? firstName : null) + ' ' + (surName ? surName : null)
    let values = getValues()
    console.log('values', values)
    return
    axios
      .post('/training/add', {
        
        imageFileName: imageFileName,
        imageUrl: imageUrl,
        title: values.trainingTitle,
        description: values.description,
        submitter: submitter,
        subject: values.subject,
        skills: values.skills,
        level: values.level,
        duration: values.duration,
        learningPathway: values.learningPathway,
        trainingLink: values.trainingLink,
        educator: values.educator
            
      })
      .then(res => {
        // Handle the response...
        console.log('res', res)
      })
      .catch(err => console.log(err));
  }

  // uploads an image to be associated with the training record (typically a header/cover type image)
  const handleImageUploadtoStorage = (e) => {
    setUploading(true)
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
        setUploading(false)
      })
      .catch(err => console.log(err));
  }

    return ( 
          <>
          {!matches ? (
            <>
            <Grid container alignItems="center" justifyContent="flex-start" spacing={1}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center">
                {!imageUrl ?
                    !uploading ?
                        <Button variant="contained" component="label" startIcon={<UploadFileIcon />}>
                            Upload Image
                            <input hidden accept="image/*, file/pdf" multiple type="file" onChange={handleImageUploadtoStorage} />
                        </Button>
                    : <LinearProgress />
                : 
                <Button variant="contained" component="label" startIcon={<UploadFileIcon />}>
                    Change Image
                    <input hidden accept="image/*, file/pdf" multiple type="file" onChange={handleImageUploadtoStorage} />
                </Button> 
                }
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center">
                <img src={imageUrl} style={{maxWidth: '75%'}} />
              </Grid>
            </Grid>
            <Card style={{margin: '5px', padding: '5px'}}>
            <form onSubmit={handleSubmit(handleTrainingRecordCreation)}>
            <Grid container alignItems="left" justifyContent="flex-start" spacing={1}>
              <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                <label for="title">Training Title</label>
              </Grid>
              <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
                <input {...register("title")} type="text" name="title"/>
              </Grid>
              <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                <label for="description">Description</label>
              </Grid>
              <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
                <input {...register("description")}type="textarea" name="description"/>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
             
                    <Controller
                    name="subject"
                    control={control}
                    type="text"
                    defaultValue={[]}
                    render={({ field }) => (
                        <FormControl>
                        <InputLabel id="subject">Subject</InputLabel>
                        <Select 
                            {...field}
                            labelId="subject"
                            label="subject"
                            multiple
                            defaultValue={[]}
                        >
                        {levelList.map((subject) => (
                            <MenuItem key={subject} value={subject}>
                                    {subject}
                            </MenuItem>
                            ))
                        }
                        </Select>
                        <FormHelperText>Select the skills the training provides.</FormHelperText>
                        </FormControl>
                    )}
                    />      
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
                {!imageUrl ?
                    !uploading ?
                        <Button variant="contained" component="label" startIcon={<UploadFileIcon />}>
                            Upload Image
                        <input hidden accept="image/*, file/pdf" multiple type="file" onChange={handleImageUploadtoStorage} />
                        </Button>
                    : <LinearProgress />
                : 
                <Button variant="contained" component="label" startIcon={<UploadFileIcon />}>
                    Change Image
                    <input hidden accept="image/*, file/pdf" multiple type="file" onChange={handleImageUploadtoStorage} />
                </Button> 
                }    
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center">
                <img src={imageUrl} style={{maxWidth: '75%'}} />
              </Grid>
            </Grid>
            <Card style={{margin: '5px', padding: '5px'}}>
            <form onSubmit={handleSubmit(handleTrainingRecordCreation)}>
            <Grid container alignItems="left" justifyContent="flex-start" spacing={1}>
              <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                <label for="imageTitle">Title</label>
              </Grid>
              <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
                <input {...register("imageTitle")} type="text" name="imageTitle"/>
              </Grid>
              <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                <label for="description">Description</label>
              </Grid>
              <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
                <input {...register("description")}type="text" name="description"/>
              </Grid>
              <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                <label for="category">Category</label>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Controller
                    name="subject"
                    control={control}
                    type="text"
                    defaultValue={[]}
                    render={({ field }) => (
                        <FormControl>
                        <InputLabel id="subject">Subject</InputLabel>
                        <Select 
                            {...field}
                            labelId="subject"
                            label="subject"
                            multiple
                            defaultValue={[]}
                        >
                        {levelList.map((subject) => (
                            <MenuItem key={subject} value={subject}>
                                {subject}
                            </MenuItem>
                            ))
                        }
                        </Select>
                        <FormHelperText>Select the skills the training provides.</FormHelperText>
                        </FormControl>
                    )}
                />      
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
