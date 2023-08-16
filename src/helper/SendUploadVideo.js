import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { getUploadVideoFormState } from "../state/createcourse/InputSlice";
import { useEffect } from "react";

const IntroductionInputValue = useSelector(state => state.Input.IntroductionInputValue)
const dispatch = useDispatch(); 

const  UploadVideoForm = async (e) => {
    // e.preventDefault()
    console.log('upload form was on')
   
    try{

    await axios.post('/uploadvideocontent', IntroductionInputValue)
     .then(res => console.log(res.data))

   }catch(err){
    console.log(err)
   }
  }

//  const UploadVideoForm =  useEffect(() => {
//     (async () => {
//         await axios.post('/uploadvideocontent', IntroductionInputValue)
//         .then(res => console.log(res.data))
//     })
//   })

  dispatch(getUploadVideoFormState({
    UploadVideoFormState : UploadVideoForm, 
  }))