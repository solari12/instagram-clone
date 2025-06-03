import React from 'react'
import './Homeright.css'
import Footer from '../../Components/Footer/Footer'
import FriendSuggestion from '../FriendSuggestion/FriendSuggestion' 
const Homeright = ({image, name, fullname}) => {
  return (
    <div className='Homeright pl-16 pr-16 pt-10 space-y-6'>
      <div className='flex justify-between items-center'>
        <div className='flex space-x-4 justify-center items-center'>
          <img src={image} alt="" className="h-12 w-12 rounded-full object-cover"/>
          <div>
            <p className='font-semibold text-sm'>{name}</p>
            <p className='text-gray-400 text-sm'>{fullname}</p>
          </div>
        </div>
        <div>
          <p style={{ color: '#394AE4' }} className='text-xs font-semibold'>Switch</p>
        </div>
      </div>
      <div className='space-y-3'>
        <div className='flex justify-between items-center'>
            <p className='text-gray-500 font-semibold text-sm'>Suggested for you</p>
            <p className='text-xs font-semibold'>See All</p>
        </div>
        <FriendSuggestion 
        name = {"stillalive_2304"} 
        avatar ={"https://i.pinimg.com/736x/4f/52/d6/4f52d6c842cc023e8c744a7109c719a5.jpg"} 
        suggest={"Suggested for you"}/>
        <FriendSuggestion 
        name = {"thanh_long127"} 
        avatar ={"https://i.pinimg.com/736x/06/9c/0a/069c0afe2fe08c7afeedb1b844b95230.jpg"} 
        suggest={"Suggested for you"}/>
        <FriendSuggestion 
        name = {"_hngan.07"} 
        avatar ={"https://i.pinimg.com/736x/e4/22/d7/e422d719957bb4dd9c43859488951fee.jpg"} 
        suggest={"Followed by tuvungtiengnhat"}/>
        <FriendSuggestion 
        name = {"hikaru5_01"} 
        avatar ={"https://i.pinimg.com/736x/6a/bc/f8/6abcf84ac150893bfaad32730c3a99a8.jpg"} 
        suggest={"Suggested for you"}/>
        <FriendSuggestion 
        name = {"quynhchi8120"} 
        avatar ={"https://i.pinimg.com/736x/3e/d4/32/3ed43241c0a7cd411cfdc364621e2c73.jpg"} 
        suggest={"Suggested for you"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Homeright