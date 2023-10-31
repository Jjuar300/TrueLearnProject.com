import {
  useState, 
  useEffect
} from 'react'
import { 
  Button,
    Card,
    Typography, 
} from '@mui/material'
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function Section({ 
  setSelectedSection, 
  selectSection, 
}) {
  const [sectionData, setSectionData] = useState([]); 
  // const sectionNumber = useSelector(state => state.AccessCourse.sectionNumber)

  // console.log(sectionNumber)

  useEffect(() => {
    axios.get('/sectioninput')
    .then((response) => setSectionData(response.data))
    .catch((error) => console.log(error))
   },[])

  return (
   <>

    {sectionData.map((data) => (
    <Card
    onClick={() => setSelectedSection(data.section)}
    sx={{
        position:'relative', 
        border: selectSection === data.section && '1px solid black', 
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
         {data.section}
        </Typography>
    </Card>
   ))}
   </>
  )
}
