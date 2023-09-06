import { useState } from "react"
import axios from "axios"

export default function UploadVideo() {
 const [file, setfile] = useState(); 

 const upload = () => {
  const formData = new FormData(); 
  formData.append('file', file)
  axios.post('/upload', formData)
 }

  return (
    <>
      <div>
      <input type="file" onChange={(e) => setfile(e.target.files[0])} />
      <button type="button" onClick={upload} >upload</button>  
      </div> 
    </>
  )
}
