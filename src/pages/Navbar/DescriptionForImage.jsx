import { useEffect, useState } from 'react'
import {Box, Typography } from '@mui/material'
import {motion, AnimatePresence, animate} from 'framer-motion'
import  './css/description.css'

const description1 = <div className='description'>
<h2 className='typoStyleMain' >Gain real world experience. </h2>
<h3 className='typoStyleComment' > With TrueLearn you can subscribe to any course channel you want. </h3>
</div>

 const description2 = <div className='description'>

 <h2 className='typoStyleMain' >Get true skills from real profesionals.  </h2>
 <h3 className='typoStyleComment' >  Upscale your skills.  </h3>
 </div>

 const description3 = <div className='description'>
 <h2 className='typoStyleMain' > Always with the best subscription deals. </h2>
 <h3 className='typoStyleComment' >   Don't doubt yourself anymore  come learn with TrueLearn.  </h3>
 </div>
  
    const descriptions = [description1, description2,description3]
    const len = descriptions.length - 1; 

   const textA1 ='Gain real world experience.'; 
   const textA2  = 'With TrueLearn you can subscribe to any course channel you want.';


export default function DescriptionForImage() {
    const [activeindex, setActiveIndex] = useState(0); 
  
    useEffect(() => {
       const interval = setInterval(() => {
        setActiveIndex(activeindex === len ? 0 : activeindex + 1 ); 
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
