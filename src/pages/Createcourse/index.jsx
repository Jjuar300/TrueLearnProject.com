import { Button } from "@mui/material"
import CreateCourseGuide from "./CreateCourseGuide"
import io from 'socket.io-client'
import { useEffect, useState } from "react";

export default function CreateCourse() {
  return (
    <>
   <CreateCourseGuide />
    </>
  )
}
