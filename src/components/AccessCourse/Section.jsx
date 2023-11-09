import {
  useState, 
  useEffect
} from 'react'
import { 
    Card,
    Typography, 
} from '@mui/material'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getAccessVideo } from '../../state/createcourse/VideoUrl';

export default function Section({ 
  setSelectedSection, 
  selectSection, 
}) {
  const [sectionData, setSectionData] = useState([]); 
  const dispatch = useDispatch(); 

  const darkhair = 'Dark_Haired_Girl_attitude_shrug_1.mp4'
  const dancing = 'Young_African_American_Woman_Laughing_Dancing_2.mp4'
  const preview = 'pexels-black-bird-17671672 (2160p).mp4' 

  useEffect(() => {
    axios.get('/sectioninput')
    .then((response) => setSectionData(response.data))
    .catch((error) => console.log(error))
   },[])

  if(selectSection === 'NNA'){
    dispatch(getAccessVideo(darkhair))
    window.location.reload()
  }else if(selectSection === 'NNP'){
    dispatch(getAccessVideo(dancing))
    window.location.reload()
  }else if(selectSection === 'Introduction'){
    dispatch(getAccessVideo(preview))
    window.location.reload()
  }

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
