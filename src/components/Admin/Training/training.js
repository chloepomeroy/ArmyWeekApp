import React, { useState, useEffect, useContext } from "react"
import { useForm, Controller } from "react-hook-form"
import { appStore } from '../../../state/app'
import { useMutation } from '@apollo/client'
import { useSnackbar } from 'notistack'
import { ADD_TRAINING } from '../../../utils/graphQLMutations'
import {
  subjectsList,
  skillsList,
  levelsList,
  durationsList,
  learningPathwaysList,
  educatorsList
} from './dropDownValues'

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
import TextField from "@mui/material/TextField"

const axios = require('axios').default

export default function TrainingAdmin(props) {

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
      subject: "",
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
  const { enqueueSnackbar } = useSnackbar()

  const [addThisTraining, { data, loading, error }] = useMutation(ADD_TRAINING)

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

  function addTraining() {
    const submitter = (rank ? rank : null) + ' ' + (firstName ? firstName : null) + ' ' + (surName ? surName : null)
    let values = getValues()
    addThisTraining({
      variables: {
        title: values.title,
        description: values.description,
        imageFileName: imageFileName,
        imageUrl: imageUrl,
        submitter: submitter,
        subject: values.subject,
        skills: values.skills,
        level: values.level,
        duration: values.duration,
        learningPathway: values.learningPathway,
        trainingLink: values.trainingLink,
        educator: values.educator
      }
    })
    if(!error & !loading) {
      reset()
      setImageUrl('')
      setImageFileName('')
    }
    enqueueSnackbar('Training Successfully Added!', {preventDuplicate:true})
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
            /* Desktop */
            <Box sx={{ width: '100%', height: '100vh', bgcolor: 'white', marginTop: '40px', paddingTop:'30px' }}>
            <Grid container alignItems="center" justifyContent="flex-start" spacing={1}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center">
                {!imageUrl ?
                    !uploading ?
                        <Button variant="contained" component="label" startIcon={<UploadFileIcon />}>
                            Upload Image
                            <input hidden accept="image/*" multiple type="file" onChange={handleImageUploadtoStorage} />
                        </Button>
                    : <LinearProgress />
                : 
                <Button variant="contained" component="label" startIcon={<UploadFileIcon />}>
                    Change Image
                    <input hidden accept="image/*" multiple type="file" onChange={handleImageUploadtoStorage} />
                </Button> 
                }
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center">
                <img src={imageUrl} style={{maxWidth: '75%'}} />
              </Grid>
            </Grid>
            <Card style={{margin: '5px', padding: '5px'}}>
            <form 
              onSubmit={handleSubmit(addTraining)}
            >
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
                name="skills"
                control={control}
                type="text"
                rules={{
                  required: true
                }}
                render={({ field }) => (
                    <FormControl>
                    <InputLabel id="skills">Skills</InputLabel>
                    <Select 
                        {...field}
                        labelId="skills"
                        label="Skills"
                        displayEmpty
                        multiple
                    >
                    {skillsList.map((skill) => (
                        <MenuItem key={skill} value={skill}>
                                {skill}
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
            </Box>
          )
          :
          (
            /* Mobile */
            loading ? (
              <Box sx={{ width: '100%', height: '100vh', bgcolor: 'white', marginTop: '40px', paddingTop:'30px' }}>
              <Grid container alignItems="center" justifyContent="flex-start" spacing={1}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center">
                  Saving...<br></br><LinearProgress />
                </Grid>
              </Grid>
              </Box>
            ) : (
            <Box sx={{ width: '100%', height: '100vh', bgcolor: 'white', marginTop: '40px', paddingTop:'30px' }}>
            <Grid container alignItems="center" justifyContent="flex-start" spacing={1}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center">
                {error ? <Typography variant="body1">{error.message}</Typography> : null}
                {!imageUrl ?
                    !uploading ?
                        <Button variant="contained" component="label" startIcon={<UploadFileIcon />}>
                            Upload Image
                        <input hidden accept="image/*" multiple type="file" onChange={handleImageUploadtoStorage} />
                        </Button>
                    : <LinearProgress />
                : 
                <Button variant="contained" component="label" startIcon={<UploadFileIcon />}>
                    Change Image
                    <input hidden accept="image/*" multiple type="file" onChange={handleImageUploadtoStorage} />
                </Button> 
                }    
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center">
                <img src={imageUrl} style={{maxWidth: '75%'}} />
              </Grid>
            </Grid>
            <Card style={{margin: '5px', padding: '5px'}}>
            <form 
              onSubmit={handleSubmit(addTraining)}
            >
            <Grid container alignItems="center" justifyContent="flex-start" spacing={1} style={{marginBottom: '76px'}}>

              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Controller
                  name="title"
                  control={control}
                  type="text"
                  rules={{
                    required: true
                  }}
                  render={({ field }) => (
                      <FormControl style={{width: '95%'}}>
                      <FormHelperText>Enter the title of the training.</FormHelperText>
                      <TextField
                          {...field}
                          labelId="title"
                          label="Title"
                          fullWidth
                          autoFocus
                      />
                      </FormControl>
                  )}
                />    
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Controller
                  name="description"
                  control={control}
                  type="text"
                  rules={{
                    required: true,
                    maxLength: 400
                  }}
                  render={({ field }) => (
                      <FormControl style={{width: '95%'}}>
                      <FormHelperText>Enter a short description of the training.</FormHelperText>
                      <TextField
                          {...field}
                          labelId="description"
                          label="Description"
                          fullWidth
                          multiline
                          rows={4}
                      />
                      </FormControl>
                  )}
                />    
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Controller
                  name="trainingLink"
                  control={control}
                  type="text"
                  rules={{
                    required: true
                  }}
                  render={({ field }) => (
                      <FormControl style={{width: '95%'}}>
                      <FormHelperText>Enter the link to the training.</FormHelperText>
                      <TextField
                          {...field}
                          labelId="trainingLink"
                          label="Training Link"
                          fullWidth
                      />
                      </FormControl>
                  )}
                />    
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Controller
                  name="educator"
                  control={control}
                  type="text"
                  rules={{
                    required: true
                  }}
                  render={({ field }) => (
                      <FormControl style={{width: '95%'}}>
                      <FormHelperText>Select who provides this training.</FormHelperText>
                      <Select 
                          {...field}
                          labelId="educator"
                          label="Educator"
                          displayEmpty
                          fullWidth
                      >
                      {educatorsList.map((educator) => (
                          <MenuItem key={educator} value={educator}>
                            {educator}
                          </MenuItem>
                          ))
                      }
                      </Select>
                      </FormControl>
                  )}
                />    
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Controller
                  name="subject"
                  control={control}
                  type="text"
                  rules={{
                    required: true
                  }}
                  render={({ field }) => (
                      <FormControl style={{width: '95%'}}>
                      <FormHelperText>Select the subject of this training.</FormHelperText>
                      <Select 
                          {...field}
                          labelId="subject"
                          label="subject"
                          displayEmpty
                          fullWidth
                      >
                      {subjectsList.map((subject) => (
                          <MenuItem key={subject} value={subject}>
                            {subject}
                          </MenuItem>
                          ))
                      }
                      </Select>
                      </FormControl>
                  )}
                />    
              </Grid>
             
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Controller
                  name="skills"
                  control={control}
                  type="text"
                  rules={{
                    required: true
                  }}
                  render={({ field }) => (
                      <FormControl style={{width: '95%'}}>
                      <FormHelperText>Select the skills the training provides.</FormHelperText>
                      <Select 
                          {...field}
                          labelId="skills"
                          label="skills"
                          displayEmpty
                          fullWidth
                          multiple
                      >
                      {skillsList.map((skill) => (
                          <MenuItem key={skill} value={skill}>
                            {skill}
                          </MenuItem>
                          ))
                      }
                      </Select>
                      </FormControl>
                  )}
                />    
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Controller
                  name="level"
                  control={control}
                  type="text"
                  rules={{
                    required: true
                  }}
                  render={({ field }) => (
                      <FormControl style={{width: '95%'}}>
                      <FormHelperText>Select the level of this training.</FormHelperText>
                      <Select 
                          {...field}
                          labelId="level"
                          label="level"
                          displayEmpty
                          fullWidth
                      >
                      {levelsList.map((level) => (
                          <MenuItem key={level} value={level}>
                            {level}
                          </MenuItem>
                          ))
                      }
                      </Select>
                      </FormControl>
                  )}
                />    
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Controller
                  name="duration"
                  control={control}
                  type="text"
                  rules={{
                    required: true
                  }}
                  render={({ field }) => (
                      <FormControl style={{width: '95%'}}>
                      <FormHelperText>Select the duration of this training.</FormHelperText>
                      <Select 
                          {...field}
                          labelId="duration"
                          label="duration"
                          displayEmpty
                          fullWidth
                      >
                      {durationsList.map((duration) => (
                          <MenuItem key={duration} value={duration}>
                            {duration}
                          </MenuItem>
                          ))
                      }
                      </Select>
                      </FormControl>
                  )}
                />    
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Controller
                  name="learningPathway"
                  control={control}
                  type="text"
                  rules={{
                    required: true
                  }}
                  render={({ field }) => (
                      <FormControl style={{width: '95%'}}>
                      <FormHelperText>Select the Learning Pathways the training belongs to.</FormHelperText>
                      <Select 
                          {...field}
                          labelId="learningPathway"
                          label="learningPathway"
                          displayEmpty
                          fullWidth
                          multiple
                      >
                      {learningPathwaysList.map((pathway) => (
                          <MenuItem key={pathway} value={pathway}>
                            {pathway}
                          </MenuItem>
                          ))
                      }
                      </Select>
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
            </Box>
          )
          )
          }
         
          </>
    )
}
