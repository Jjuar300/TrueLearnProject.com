import React, { useState } from 'react'
import { Box } from '@mui/material'
import { 
    IKContext,
    IKUpload, 
} from 'imagekitio-react'
import { 
  useSelector, 
  useDispatch
} from 'react-redux';

export default function UploadFile({
    handleFileChange, 
    file, 
    setUserImage, 
}) {
    
    const dispatch = useDispatch(); 
    const isFilePosition = useSelector(state => state.UserFile.isFilePosition)
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

  return (
    <>
     <Box
      sx={{
     position: isFilePosition && 'absolute', 
     border:'1px solid gray',
      borderRadius:'5px', 
      width: '16rem',
      height:'5rem',
      display:'flex',  
      justifyContent:'center', 
      padding:'1rem',  
      backgroundColor:'#fdf8ff',
      color:'gray',
      top:'16rem', 
      left:'47rem', 
      ':hover':{cursor:'pointer'},
      }}
   >
   <IKContext
  publicKey={publicKey}
  urlEndpoint={urlEndPoint}
  authenticator={authenticator}
  >
   <IKUpload
   style={{
    cursor:'pointer',
   }}
   onChange={handleFileChange}
  //  fileName={getFileName}
   onError={(err) => console.log(err)}
   onSuccess={(success) => setUserImage(success)}
   useUniqueFileName={false}
   />
  </IKContext>
   </Box>
    </>
  )
}
