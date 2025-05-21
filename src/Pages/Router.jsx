import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from '../Components/Sidebar'
import HomePage from './HomePage/HomePage'
import Profile from './ProfilePage/Profile'
const Router = () => {
    return (
        <div>
            <div className='flex'>
                <div className='w-[20%] border border-l-slate-500 pl-10'>
                    <Sidebar />
                </div>
                <div className='w-full flex justify-center'>
                    <div className='w-[90%] '>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/username/*" element={<Profile />} />
                        </Routes>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Router