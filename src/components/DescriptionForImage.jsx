import { useEffect, useState } from 'react'
import {Box, Typography } from '@mui/material'
import {motion, AnimatePresence} from 'framer-motion'
import './css/description.css'


const typoStyleMain = {
    position:'absolute', 
    fontFamily:'Roman', 
    fontWeight: 'bold',
    fontSize:'26px',
    width:'370px',
    left:'4%',
    top:'25px',
}

const typoStyleComment = {
  position:'absolute',
  fontFamily:'roman', 
  color: '#322d2e',
  fontSize:'20px', 
}

// Gain real world experience. 
// With TrueLearn you can subscribe
// to any course channel you want. 

const description1 = <div>

<h2 className='typoStyleMain' >Gain real world experience. </h2>
<h3 className='typoStyleComment' > With TrueLearn you can subscribe to any course channel you want. </h3>
</div>


 const description2 =  
  <Typography
sx={typoStyleMain}
>
    Get true skills from real profesionals. 
    <Typography
    sx={typoStyleComment}
    >
       Upscale your skills. 
    </Typography>
</Typography>


 const description3 =   <Typography
sx={typoStyleMain}
>
    Always with the best subscription deals. 
    <Typography
    sx={typoStyleComment}
    >
        Don't doubt yourself anymore 
        come learn with TrueLearn. 
    </Typography>
</Typography>


  
    const descriptions = [[description1], [description2],[description3]]
    const len = descriptions.length - 1; 



export default function DescriptionForImage() {

    const [activeindex, setActiveIndex] = useState(0); 
   
    useEffect(() => {
       const interval = setInterval(() => {
        setActiveIndex(activeindex === len ? 0 : activeindex + 1); 
       }, 3500)
       return () => clearInterval(interval); 
    }, [activeindex]);



  return (
   
    <>
    <Box
    position='relative'
    top="10px"
    >
  <div
  >{descriptions[activeindex]}</div>

    </Box>
    </>
  )
}
