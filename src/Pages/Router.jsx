import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from '../Components/Sidebar'
import HomePage from './HomePage'
const Router = () => {
    return (
       <div>
        <div className='flex'>
            <div className='w-[20%] border border-l-slate-500 pl-10'>
        <Sidebar />
            </div>
            <div>
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
            </div>
        </div>
       </div>
    )
}
export default Router