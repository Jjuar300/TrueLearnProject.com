import { useCallback, useState } from "react"
import { TextField, Box } from "@mui/material";
import { useDropzone } from "react-dropzone";

export default function UploadVideo({
  height,
  Icons,  
}) {
 
 const [file, setFiles] = useState();
 const [fileName, setFileName] = useState();

 const onDrop = useCallback((acceptedFiles) => {
   const filename = acceptedFiles.map((file) => file.name)
   console.log('Accepted files:', acceptedFiles)
   setFiles(acceptedFiles)
   setFileName(filename)
  }, [])


  const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <>
    <Box
     {...getRootProps()}
     sx={{
      height: {height}, 
     }}
     >
        <form>
      
       <TextField {...getInputProps()} />
  
    { !file ? Icons : 
   fileName
   }
        </form>
    </Box>
    </>
  )
}
