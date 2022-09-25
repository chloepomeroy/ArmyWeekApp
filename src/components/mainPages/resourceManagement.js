import React, {useState, useEffect} from "react"
import { useForm } from 'react-hook-form'
import PdfThumbnail from 'react-pdf-thumbnail'

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

  const [viewImage, setViewImage] = useState()

  const createThumb = async (data) => {
    console.log('creatthumb data', data)
		const { File, error, imageUrl } = await PdfThumbnail(
			data.file[0],
			{ // thumb image config
				fileName: data.file[0].name.split('.')[0]+'.png', // thumb file name
				height: 200, // image height
				width: 200, // image width
				pageNo: 1  // pdf page number
			}
		);
		if (!error) {
      const formData = new FormData();
      formData.append("image", File);
      const res = await fetch("/upload/image", {
        method: "POST",
        body: formData,
      }).then((response) => {
        console.log('response', response)
        return response
      })
      return res
		}
	};

  const onSubmitPDF = async (data) => {
    const formData = new FormData();
    formData.append("file", data.file[0]);
    let thumb = createThumb(data)
    formData.append("thumb", thumb)
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
    const res = await fetch("/upload/image", {
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

  const handleImageUpload = (e) => {
    const dataForm = new FormData();
    console.log('e', e)
    dataForm.append('file', e.target.files[0]);  
    console.log('dataform', dataForm)
    axios
      .post('/upload/add-image', dataForm)
      .then(res => {
        // Handle the response...
        console.log('res', res)
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
