import { useEffect, useState } from 'react'
import {Box} from '@mui/material'
import  './css/description.css'
import useMediaQuery from '@mui/material/useMediaQuery'

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

export default function DescriptionForImage() {
    const [activeindex, setActiveIndex] = useState(0); 
    const isNotMobileScreen = useMediaQuery('(min-width: 1000px)')
  

    useEffect(() => {
       const interval = setInterval(() => {
        setActiveIndex(activeindex === len ? 0 : activeindex + 1 ); 
       }, 3500)
       return () => clearInterval(interval); 
    }, [activeindex]);

  return (
    <>
    <Box
    sx={{
      position:'relative', 
      top: isNotMobileScreen ? '-20rem' :'10rem', 
      left: isNotMobileScreen ? '50rem' : '0%', 
      fontSize: isNotMobileScreen ? '20px' : 'none', 
    }}
    >
  <div
  >{descriptions[activeindex]}</div>
    </Box>
    </>
  )
}
