import { Box} from '@mui/material'
import LearnImage1 from '../../assets/linkedin-sales-solutions-1LyBcHrH4J8-unsplash.jpg'
import LearnImage2 from '../../assets/samantha-borges-EeS69TTPQ18-unsplash.jpg'
import LearnImage3  from '../../assets/emmanuel-ikwuegbu-MSX3O-Sqa8U-unsplash.jpg'
import SimpleImageSlider from 'react-simple-image-slider'
import Descriptions from './DescriptionForImage'
import useMediaQuery from '@mui/material/useMediaQuery'

export default function SliderImage() {
    const isNotMobileScreen = useMediaQuery('(min-width: 1000px)')
  
    const setimages = [
        { url: LearnImage1}, 
        { url: LearnImage2}, 
        { url: LearnImage3}
    ]
   
  return (
   
    <>
    <Box
    sx={{ 
      position:'absolute', 
      top: isNotMobileScreen ? '200px' :'80px', 
      left: isNotMobileScreen ? '5%' : '0%', 
      }}  > 
        <SimpleImageSlider
        width={isNotMobileScreen ? 800 : 370} 
        height={isNotMobileScreen ? 550 : 260}
        images={setimages}
        autoPlay={true}
        autoPlayDelay={3}
        />  
          <Descriptions></Descriptions>
    </Box>
    </>
  )
}

