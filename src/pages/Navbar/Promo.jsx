import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import {useSelector, useDispatch} from 'react-redux'
import { handledPromoClose } from '../../state/PromoSlice';

export default function Promo() {

    const PromoOpen = useSelector((state) => state.Promo.isPromo)
    const dispatch = useDispatch(); 

  return (

   PromoOpen ? <Box
    sx={{
        position:'relative', 
        top:'-10px', 
        left:'-2%', 
        backgroundColor:'#052451', 
        width:'360px',
        height:'40px', 
        padding: '1rem', 
        textAlign:'center',  
        
    }}
    >
        <Typography
        sx={{
            color:'white', 
        }}
        >
        Specialize instructors. 
        <Typography sx={{fontSize:'15px'}}>
            Learn any where with Truelearn! 
        </Typography>
        </Typography>

        <Button
        onClick={() => dispatch(handledPromoClose())}
         sx={{
            position:'absolute', 
            color:'white', 
            left:'85%',
            top:'-2px',  
         }}
        >
        <CloseIcon/>
        </Button>
      
    </Box>
    : null
  )
}
