import React, {useState, useEffect} from "react"

//Components
import Layout from "../components/layout"
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import UploadFileIcon from '@mui/icons-material/UploadFile';

const axios = require('axios').default

export default function Admin(props) {

  const handleUpload = (e) => {
    const dataForm = new FormData();
    dataForm.append('file', e.target.files[0]);  
    console.log('dataform', dataForm)
    axios
      .post('/upload/add-file', dataForm)
      .then(res => {
        // Handle the response...
        console.log('res', res)
      })
      .catch(err => console.log(err));
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

  function createLink(url, file) {
    let anchor = document.createElement('a');
    let link = document.createTextNode(file);
    anchor.appendChild(link);
    anchor.href = url;
    anchor.target = "_blank"
    document.body.appendChild(anchor);
  }

    return (
        <Layout>
          
          {/* <Grid container spacing={2} alignItems="center" justifyContent="center" m={3}> */}

{/* Desktop */}         
          <Grid container spacing={5} alignItems="flex-start" justifyContent="center" mt={5} mr={5} ml={5} mb={5} sx={{display: { xs: 'none', md: 'flex' }}}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Button variant="contained" component="label">
                Upload Resource
                <input hidden accept="image/*, file/pdf" multiple type="file" onChange={handleUpload} />
              </Button>
              <UploadFileIcon />
            </Stack>
          </Grid>
            
{/* Mobile */}
          <Grid container alignItems="center" justifyContent="center">
            <Stack direction="row" alignItems="center" spacing={2}>
              <Button variant="contained" component="label">
                Upload Resource
                <input hidden accept="image/*, file/pdf" multiple type="file" onChange={handleUpload} />
              </Button>

              
              <Button variant="contained" component="label" onClick={(e) => handleDownload('20211207-U-CA_Data_Governance.pdf')}>
                Download Resource
              </Button>
              

              <UploadFileIcon />
            </Stack>
          </Grid>

      </Layout>
    )
  }
