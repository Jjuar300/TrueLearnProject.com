import {
  useState, 
  useEffect,
} from 'react'
import { 
    Card,
    Typography, 
} from '@mui/material'
import axios from 'axios';
import { useDispatch} from 'react-redux';
import { getAccessVideo} from '../../state/createcourse/VideoUrl';

export default function Section({ 
  setSelectedSection, 
  selectSection, 
}) {
  const [sectionData, setSectionData] = useState([]); 
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('/sectioninput')
    .then((response) => setSectionData(response.data))
    .catch((error) => console.log(error))
   },[])

    sectionData.map((data) => {
      if(selectSection === data.section){
         dispatch(getAccessVideo(data.sectionVideoFile))       }
    })
  
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
