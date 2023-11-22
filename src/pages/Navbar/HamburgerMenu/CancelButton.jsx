import React from 'react'
import {Button} from '@mui/material'
import CancelIcon from '@mui/icons-material/Cancel'
import { useDispatch } from 'react-redux'
import {handleClose} from '../../../state/CancelButtonSlice'

export default function CancelButton() {

  const dispath = useDispatch();

  return (
    <Button
    onClick={() => dispath(handleClose())}
    name='CancelButtonIcon'
    sx={{
      color:'black', 
      left: '10%',
      top:'-5px', 
    }}
    >
     <CancelIcon fontSize='large' />
    </Button>
  )
}
