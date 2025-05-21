import React from 'react'
import { TbCircleDashed } from "react-icons/tb";
const ProfileUserDetails = () => {
    return (
        <div>
            <div className='py-10 w-full border-b border-l-slate-500'>
                <div className='flex justify'>
                    <div className='w-[35%]'>
                        <div className='w-full h-full flex justify-center items-center'>
                        <div className="h-52 w-52 bg-gradient-to-tr from-[#FFC900] to-[#D300C5] p-xss rounded-full flex justify-center items-ceter" >
                        <div className="h-full w-full bg-white rounded-full flex justify-center items-center">
                            <img
                                className="h-50 w-50 rounded-full"
                                src="https://plus.unsplash.com/premium_photo-1722100466194-3896a8ad0279?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                            />
                        </div>
                    </div>
                        </div>
                    </div>
                    <div>
                        <div className='ml-5 space-y-5'>
                            <div className='flex space-x-5 items-center'>
                                <p>Username</p>
                                <button>Edit Profile</button>
                                <button>View Archive</button>
                                <TbCircleDashed />
                            </div>
                            <div className='flex space-x-5 items-center'>
                                <div className='flex space-x-1 items-center'>
                                    <span className='font-bold'>10</span>
                                    <p>post</p>
                                </div>
                                <div className='flex space-x-1 items-center'>
                                    <span className='font-bold'>122</span>
                                    <p>followers</p>
                                </div>
                                <div className='flex space-x-1 items-center'>
                                    <span className='font-bold'>14</span>
                                    <p>following</p>
                                </div>
                            </div>
                            <div>
                                <div className='flex space-x-5 items-center'>
                                    <p className='font-bold'>Sigmoid</p>
                                </div>
                                <div>
                                    <p>panda</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='mx-10 mt-10'>
                    <div className='flex space-x-10' >
                        <div className="flex flex-col items-center">
                            <div className="w-28 h-28 rounded-full border-2 border-slate-200 flex items-center justify-center">
                                <img
                                    className="w-24 h-24 rounded-full"
                                    src="https://img.icons8.com/?size=100&id=1501&format=png&color=000000"
                                    alt=""
                                />
                            </div>
                            <p className="mt-2">New</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-28 h-28 rounded-full border-2 border-slate-200 flex items-center justify-center">
                                <img
                                    className="w-24 h-24 rounded-full"
                                    src="https://images.unsplash.com/photo-1745600132390-6e85c23ea13a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt=""
                                />
                            </div>
                            <p className="mt-2">New</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default ProfileUserDetails