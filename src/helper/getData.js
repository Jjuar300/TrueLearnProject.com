import axios from 'axios'
import { useEffect } from 'react'

export const GetData = (endpoint, setState) => {
    useEffect(() => {
     axios.get(endpoint)
    .then((response) => setState(response.data))
    .catch((error) => console.log(error) )
    },[])
 }
