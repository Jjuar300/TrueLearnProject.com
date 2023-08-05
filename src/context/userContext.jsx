import axios from "axios";
import { createContext, useState, useEffect, } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { getData, getLogout } from "../state/ServerSlice";
import Cookies from 'js-cookie'

export const UserContext = createContext({})

export function UserContextProvider({children}){
    const dispatch = useDispatch(); 
    // const [user, setuser] = useState(null);
    const user = useSelector(state => state.ServerSlice.data)
  
    // localStorage.setItem('token', dispatch(getData({
    //     data: data, 
    //   })))
  

    const getUser = async () => {
          const data =  await axios.get('/authorization')
                dispatch(getData({
                    data: Cookies.set(data) 
                }))

                /* use the cookie library for
                your advantage, this library can remove and 
                add cookies in to your browser.
                */
    }


    useEffect(()  => {
       getUser(); 
    },[])

 

    console.log(user)

    return (
        <UserContext.Provider value={{user}} >
            {children}
        </UserContext.Provider>
    )
}