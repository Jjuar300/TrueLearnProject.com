import { 
    Box,
    TextField, 
    Typography, 
} from '@mui/material'
import React, { useState } from 'react'
import { 
    IKContext,
    IKUpload, 
} from 'imagekitio-react'

export default function Curriculum() {
    const [file, setfile] = useState(); 
    const [userFile, setUserFile] = useState(); 

    const publicKey = 'public_GjEtjvvBdROHsJ46QIVXwiNKWGo='; 
    const urlEndPoint = 'https://ik.imagekit.io/4pwok1cjp/'; 
    const authenticator = async () => {
        try{
            const response = await fetch('/auth'); 
            if(!response.ok){
              const errorText = await response?.text(); 
              throw new Error(`Request failed with status ${response.status}: ${errorText}`)
            }

            const data = await response.json(); 
            const {signature, expire, token} = data; 
            return {signature, expire, token}; 
        }catch(error){
            throw new Error(`Authentication request failed: ${error.message}`)
        }
    }

    const handleFileChange = (e) => { 
        setfile(e.target.files[0])
      }

  return (
    <>
    <div>

     <Box
     sx={{
        display:'flex', 
       justifyContent:'center',  
        position:'absolute', 
        left:'50rem', 
        top:'20rem', 
        backgroundColor:'#f5f4f4', 
        border:'1px solid blue', 
        padding:'3rem', 
        height:'10rem', 
     }}
     >
    
     <Typography
     sx={{
        position:'relative', 
        top:'-2rem',
        fontFamily:'robot',
        fontSize:'1.3rem',   
     }}
     >
        Introduction
     </Typography>
    
       <TextField
       placeholder='Add title '
       />
      
       <Box
       sx={{
        position:'relative', 
       }}
       >
       <IKContext
        publicKey={publicKey}
        urlEndpoint={urlEndPoint}
        authenticator={authenticator}
        >
            <IKUpload
            onChange={handleFileChange}
            onError={(error) => console.log(error)}
            onSuccess={(success) => setUserFile(success)}
            useUniqueFileName={false}
            />
        </IKContext>
       </Box>
       
     </Box>
    </div>
    </>
  )
}
