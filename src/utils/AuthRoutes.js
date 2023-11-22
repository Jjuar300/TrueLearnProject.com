import { useSelector } from "react-redux"
import { Outlet, Navigate, useNavigate } from "react-router-dom"


export default function PrivateRoutes() {
    const userData = Boolean(useSelector(state => state.ServerSlice.data))

   return (
     <>
      {!userData ? <Outlet/> : <Navigate to='/' />}
      
     </>
  )
}
