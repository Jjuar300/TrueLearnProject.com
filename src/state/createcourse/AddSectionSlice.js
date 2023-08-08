import { createSlice } from "@reduxjs/toolkit";


// import { useState } from "react"
// import LectureSection from "../../components/LectureSection"

// export function AddSection(){
//   const Section = <LectureSection/>
//   const [orginalSection, setOrginalSection] = useState([Section])
//   const newSection = [...orginalSection, Section]
//    setOrginalSection(newSection)

//    return orginalSection;
// }

export const AddSectionSlice = createSlice({
    name:"AddSectionSlice", 
    initialState:{
        orginalElement: null,
    }, 
    reducers:{
       handleSection:(state, action) => {
         state.isSection = action.payload.isSection; 
       }
    }
})


export const {handleSection} = AddSectionSlice.actions; 
export default AddSectionSlice.reducer; 