import React from 'react'
import { Button } from '@mui/material'
import {styled} from '@mui/system'

const SignUpButton = styled(Button)({
        backgroundColor: '#8002a2', 
        ":hover": {backgroundColor: '#a403cf'}, 
        left: '60%', 
        width:'20px', 
})

export default SignUpButton;