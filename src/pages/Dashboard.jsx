import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/Dashboard/SideBar'

const Dashboard = () => {
    const {loading:authLoading}=useSelector((state)=>state.auth)
    const {loading:profileLoading}=useSelector((state)=>state.profile)

    if(profileLoading || authLoading){
        return (
            <div className='blob'></div>
        )
    }
  return (
    <div className='flex h-full'>
    <SideBar className="h-full"/>
    <div className="overflow:auto">
        <div className='mx-auto w-11/12 max-w-[100px]'>
            <Outlet></Outlet>
        </div>
    </div>
    </div>
  )
}

export default Dashboard
