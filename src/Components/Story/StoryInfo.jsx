import React from 'react'
import UserAvatar from '../User/UserAvatar'
const StoryInfo = () => {
    return (
        <div className='flex justify-center items-ceter'>
            <div className='flex-col justify-center items-center'>
                <UserAvatar size ={16} src='https://plus.unsplash.com/premium_photo-1747674292543-e2600bd34375?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D'/>
                <div className='flex justify-center items-ceter'>
                    <p className='text-xs'>username</p>
                </div>
            </div>
        </div>
    )
}

export default StoryInfo