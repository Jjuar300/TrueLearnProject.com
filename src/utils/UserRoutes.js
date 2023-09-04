import { useSelector } from "react-redux"
import { Outlet, Navigate } from "react-router-dom"

export default function UserRoutes() {
    const userData = Boolean(useSelector(state => state.ServerSlice.data))
  console.log(userData)
    return (
    <>
    {!!userData ?  <Outlet/> :  <Navigate to='/' />}
    </>
  )
}
