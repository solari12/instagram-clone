import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from '../Components/Sidebar'
import HomePage from './HomePage/HomePage'
import Profile from './ProfilePage/Profile'
import Login from '../Pages/LoginPage/LoginPage'
import Register from '../Pages/RegisterPage/RegisterPage'
const Router = () => {
    const location = useLocation();
    const isLoginPage = location.pathname === "/login" || "/register";

    if (isLoginPage) {
        return (
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        );
    }

    return (
        <div>
            <div className='flex'>
                <div className='w-[19%] border border-l-slate-500 pl-10'>
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