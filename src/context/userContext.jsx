
//passing data through out our application.
import axios from "axios";
import { createContext, useEffect } from "react";
import {useDispatch} from 'react-redux'
import { getData} from "../state/ServerSlice";
import Cookies from 'js-cookie'


export const UserContext = createContext({})


export function UserContextProvider({children}){
    const dispatch = useDispatch(); 
    /* here im getting the data that verifies if the token
    exist in the user.
    */
    const getUser = async () => {

                /*adding data and stored it in the ServerSlice redux slice.
                all the way to the data key in the initialState.
                */
                dispatch(getData({ 
                    data: Cookies.get('token') /* i install js-cookies 
                    to get the token from the cookies in the 
                    browser. 
                    */
                }))
    }

    /* im using useEffect here so when 
    user refresh the page then features that are added after
    user sign in is still there. 
    */
    useEffect(()  => {
         
        if(Cookies.get('token')){ //if the token is not in the cookie then run the getUser function.
            getUser();
        } else{
            console.log('your are not authorized')
        }
    },[])

    /* the return does not do much 
     it is there simply because i dont want to remove it 
     and then break my code. 
    */
    return (
        <UserContext.Provider value={{}} >
            {children}
        </UserContext.Provider>
    )
}