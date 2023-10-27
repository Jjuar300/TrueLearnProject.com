import {
  useState, 
  useEffect
} from 'react'
import { 
    Card,
    Typography, 
} from '@mui/material'
import axios from 'axios';

export default function Section({
  borderStyle, 
  setSelectedSection, 
}) {
  const [sectionTitle, setSectionTitle] = useState([]); 

  useEffect(() => {
    axios.get('/sectioninput')
    .then((response) => setSectionTitle(response.data))
    .catch((error) => console.log(error))
   },[])

  return (
   <>
    {sectionTitle.map((data) => (
    
    <Card
    onClick={() => setSelectedSection(data.section)}
    sx={{
        position:'relative', 
        border:borderStyle, 
        borderRadius:'0', 
        left:'80rem',  
        width:'25rem', 
        height:'5rem',
        cursor:'pointer',  
    }}
    >
        <Typography
        sx={{
          position:'relative', 
          fontFamily:'roman', 
          fontSize:'1.5rem', 
          left:'1rem',  
          top:'1rem', 
        }}
        > 
            Section 2: {data.section}
        </Typography>
    </Card>
   ))}
   </>
  )
}
