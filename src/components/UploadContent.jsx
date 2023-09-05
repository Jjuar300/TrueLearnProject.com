import { useCallback, useState } from "react"
import { TextField, Box } from "@mui/material";
import { useDropzone } from "react-dropzone";
import { useDispatch } from "react-redux";
import { updateFileName } from "../state/createcourse/VideoContent";

export default function UploadVideo({
  height,
  Icons,  
}) {
 
 const dispatch = useDispatch(); 
 const [file, setFiles] = useState();
 const [fileName, setFileName] = useState();

 const onDrop = useCallback((acceptedFiles) => {
   const filename = acceptedFiles.map((file) => file.name)
   console.log('Accepted files:', acceptedFiles)
   setFiles(acceptedFiles)
   setFileName(filename)
  }, [])

  dispatch(updateFileName(fileName))

  const {getRootProps, getInputProps} = useDropzone({onDrop})
  // const formData = new FormData(); 
  // formData.append('video', fileName)

  // axios.post('/uploadvideocontent', formData); 

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
