import React from 'react'
import Comment from '../../Assets/comment.png'
import Heart from '../../Assets/heart.png'
import './ReqUserPostCard.css'
const ReqUserPostCard = () => {
  return (
    <div>
        <div>
            <div className='w-full grid grid-cols-3 gap-2 '>
                <div class='posts h-[450px]'>
                        <img src="https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-full object-cover'/>
                    <div class='stats' id='type'>
                        <p>Types</p>
                    </div>
                    <div class='stats interact flex justify-center items-center' >
                        <div className='flex justify-center items-center'>
                            <img src={Comment} alt="" className='w-6 h-6'/>
                            <span className='text-white text-l ml-2 font-bold'>0</span>
                        </div>
                        <div className='flex justify-center items-center ml-5'>
                            <img src={Heart} alt="" className='w-6 h-6'/>
                            <span className='text-white text-l ml-2 font-bold'>14</span>
                        </div>
                    </div>
                </div>
                <div class='posts'>
                        <img src="https://plus.unsplash.com/premium_photo-1708225999156-c33abbcf3843?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D" alt="" className='w-full h-full object-cover'/>
                    <div class='stats' id='type'>
                        <p>Types</p>
                    </div>
                    <div class='stats interact flex justify-center items-center' >
                        <div className='flex justify-center items-center'>
                            <img src={Comment} alt="" className='w-5 h-5'/>
                            <span className='text-white text-l ml-2'>0</span>
                        </div>
                        <div className='flex justify-center items-center ml-5'>
                            <img src={Heart} alt="" className='w-5 h-5'/>
                            <span className='text-white text-l ml-2'>14</span>
                        </div>
                    </div>
                </div>
                <div class='posts'>
                        <img src="https://plus.unsplash.com/premium_photo-1682708140311-9390c6279840?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8" alt="" className='w-full h-full'/>
                    <div class='stats' id='type'>
                        <p>Types</p>
                    </div>
                    <div class='stats interact flex justify-center items-center' >
                        <div className='flex justify-center items-center'>
                            <img src={Comment} alt="" className='w-5 h-5'/>
                            <span className='text-white text-l ml-2'>0</span>
                        </div>
                        <div className='flex justify-center items-center ml-5'>
                            <img src={Heart} alt="" className='w-5 h-5'/>
                            <span className='text-white text-l ml-2'>14</span>
                        </div>
                    </div>
                </div>
                <div class='posts'>
                        <img src="https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-full'/>
                    <div class='stats' id='type'>
                        <p>Types</p>
                    </div>
                    <div class='stats interact flex justify-center items-center' >
                        <div className='flex justify-center items-center'>
                            <img src={Comment} alt="" className='w-5 h-5'/>
                            <span className='text-white text-l ml-2'>0</span>
                        </div>
                        <div className='flex justify-center items-center ml-5'>
                            <img src={Heart} alt="" className='w-5 h-5'/>
                            <span className='text-white text-l ml-2'>14</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReqUserPostCard