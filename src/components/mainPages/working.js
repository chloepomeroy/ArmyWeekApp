import React, {useState, useEffect} from "react"
import { useForm, Controller } from "react-hook-form";
import { appStore, onAppMount } from '../../state/app'

//Components
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import UploadFileIcon from '@mui/icons-material/UploadFile'
import useMediaQuery from '@mui/material/useMediaQuery'
import Box from '@mui/material/Box'

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
  const onSubmitPDF = async (data) => {
    const formData = new FormData();
    formData.append("file", data.file[0]);
    const res = await fetch("/upload/file", {
        method: "POST",
        body: formData,
    }).then((res) => {
      console.log('response', res)
      res.json()
    }
    );
  };

  const onSubmitImage = async (data) => {
    const formData = new FormData();
    formData.append("image", data.file[0]);
    const res = await fetch("/image/add", {
        method: "POST",
        body: formData,
    }).then((res) => {
      console.log('response', res)
      res.json()
    }
    );
  };

  async function handleResourceUpload(e) {
    const dataForm = new FormData();
    console.log('e', e)
    dataForm.append('file', e.target.files[0]);
   
    // let itemArray = []
    dataForm.forEach(file => {
      console.log("File: ", file)
    //   let itemObject = {
    //     fileName: file.name,
    //     lastModified: file.lastModified,
    //     lastModifiedDate: file.lastModifiedDate.toLocaleDateString(),
    //     fileSize: file.size,
    //     fileType: file.type
    //   }
    //   itemArray.push(itemObject)
   
      try{
        axios.post('/upload/file', dataForm,
          {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          }    
        ).then((res) => {
          console.log('response', res)
        })
      } catch (err) {
        console.log('problem with adding resource', err)
      }
    })
  }

  async function handleDownload(e) {
    console.log('e', e)
    let fileName = e
    let result = await axios.post('/upload/get-file', 
        {
          fileName: fileName
        }
    )
    // console.log('result', result)
    //  const href = URL.createObjectURL(result.data)
    // console.log('href', href)
    createLink(result.data, fileName)
  }

  function handleImageRecordAddition (imageFileName, imageTitle, description, category, link) {
    const submitter = rank ? rank : null + ' ' + firstName ? firstName : null + ' ' + surName ? surName : null
    // const dataForm = new FormData();
    // console.log('e', e)
    // dataForm.append('file', e.target.files[0])
    // dataForm.append('description', description)
    // dataForm.append('submitter', submitter)
    // dataForm.append('link', imageUrl)
    // dataForm.append('like', [])
    // dataForm.append('neutrals', [])
    // dataForm.append('dislikes', [])
    axios
      .post('/image/add', {
        imageFileName: imageFileName,
        imageTitle: imageTitle,
        description: description,
        submitter: submitter,
        category: category,
        link: link
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
    let imageUrl = axios
      .post('/image/add-to-storage', dataForm)
      .then(res => {
        // Handle the response...
        console.log('res', res)
        setImageUrl(res)
        handleImageRecordAddition(imageFileName, imageTitle, description, category, imageUrl)
      })
      .catch(err => console.log(err));
  }

  function createLink(url, file) {
    let anchor = document.createElement('a');
    let link = document.createTextNode(file);
    anchor.appendChild(link);
    anchor.href = url;
    anchor.target = "_blank"
    document.body.appendChild(anchor);
  }

    return ( 
          <>
          <Box sx={{ width: '100%', height: '100vh', bgcolor: 'white', marginTop: '40px', paddingTop:'30px' }}>
          {!matches ? (
          <Grid container spacing={5} alignItems="center" justifyContent="center">
            <Stack direction="row" alignItems="center" spacing={2}>
              <Button variant="contained" component="label">
                Upload Resource
                <input hidden accept="file/pdf" multiple type="file" onChange={(e) => handleResourceUpload(e)} />
              </Button>
              <UploadFileIcon />
            </Stack>
          </Grid>
          )
          :
          (
          <Grid container alignItems="center" justifyContent="center">
            <Stack direction="column" alignItems="center">
            <div>
            <Button variant="contained" component="label">
                Upload Image
                <input hidden accept="image/*, file/pdf" multiple type="file" onChange={handleImageUpload} />
            </Button>
            <img src={imageUrl} style={{maxWidth: '50px'}} />
            <form onSubmit={handleSubmit(handleImageUploadtoStorage)}>
              <input type="text" name="imageTitle" value={imageTitle} />
              <input type="text" name="description" value={description} />
              <input type="text" name="imageUrl" value={imageUrl} />
              <input type="text" name="category" value={category} />
              <input type="submit" />
            </form>
            </div>
              <div>
              <form onSubmit={handleSubmit(onSubmitPDF)}>
                  <input type="file" label="Choose PDF" accept="file/pdf" {...register("file")} />
                  <input type="submit" />
              </form>
              </div>
              <div>
              <form onSubmit={handleSubmit(onSubmitImage)}>
                <input type="file" label="Choose Image" accept="image/*" {...register("image")} />
                <input type="submit" />
              </form>
              </div>
              
              <Button variant="contained" component="label">
                Upload Image
                <input hidden accept="image/*, file/pdf" multiple type="file" onChange={handleImageUpload} />
              </Button>

              
              <Button variant="contained" component="label" onClick={(e) => handleDownload('20211207-U-CA_Data_Governance.pdf')}>
                Download Resource
              </Button>
              

              <UploadFileIcon />
            </Stack>
          </Grid>
          )
          }
          </Box>
          </>
    )
}
