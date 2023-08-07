import { useSelector } from "react-redux"
import { Outlet, Navigate } from "react-router-dom"
import NotFound from "../pages/Homepage/NotFound"
import HomePage from "../pages/Homepage"

export default function UserRoutes() {
    const userData = Boolean(useSelector(state => state.ServerSlice.data))
  console.log(userData)
    return (
    <>
    {!!userData ?  <Outlet/> :  <Navigate to='/' />}
    </>
  )
}
