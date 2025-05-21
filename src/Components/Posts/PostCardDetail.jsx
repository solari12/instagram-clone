import React from 'react'
import UserAvatar from '../User/UserAvatar'
import Options from '../../Assets/option.png'
import Favorite from '../../Assets/favorite.png'
import BubbleChat from '../../Assets/bubble-chat.png'
import Send from '../../Assets/send.png'
import Save from '../../Assets/saved.png'
const PostCardDetail = () => {
    return (
        <div>
            <div className=' w-full h-full border-b border-b border-l-slate-500 space-y-2 pb-5'>
                <div className='flex justify-between items-center w-full'>
                    <div className='flex justify-left itmes-center space-x-1'>
                        <div className='w-full h-full flex justify-center items-center'>
                            <UserAvatar size={10} borderWidth={2} src='https://plus.unsplash.com/premium_photo-1722100466194-3896a8ad0279?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                        </div>
                        <div className='flex justify-center items-center'>
                            <p className='text-sm font-semibold'>lowkey.hoctiengnhat</p>
                        </div>
                        <div className='flex justify-center items-center space-x-0.5'>
                            <div className='h-full'>
                                <p className='text-xl font-semibold text-gray-500'>.</p>
                            </div>
                            <p className='text-sm text-gray-500'>3d</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <img src={Options} alt="" className='w-4 h-4' />
                    </div>
                </div>
                <div className='w-full'>
                    <img className='rounded w-full h-auto object-contain' src="https://images.unsplash.com/photo-1746540368676-3ea770f8b9e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D" alt="" />
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex justify-center items-center space-x-3'>
                        <div>
                            <img className='w-6 h-6' src={Favorite} alt="" />
                        </div>
                        <div>
                            <img className='w-6 h-6' src={BubbleChat} alt="" />
                        </div>
                        <div>
                            <img className='w-6 h-6' src={Send} alt="" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <img className='w-5 h-6' src={Save} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCardDetail