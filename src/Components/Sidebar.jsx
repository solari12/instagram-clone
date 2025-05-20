import React from 'react'
import InstagramLogo from '../Assets/Instagram-Logo.png'
import { IoReorderThree } from "react-icons/io5";
import { Menu } from './SidebarConfig'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'  
const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(Menu[0].tittle)
  const navigate = useNavigate()
  const handleTabClick = (tittle) => {
    setActiveTab(tittle)
    if(tittle === "Profile"){
      navigate('/username')
    }else if (tittle === "Home"){
      navigate('/')
    }
  }

  return (
    <div className='sticky top-0 h-[100vh]'>
        <div className='flex flex-col justify-between h-full'> 
          <div>
            <div className='pt-10'>
              <img className='w-40' src={InstagramLogo} alt="Instagram Logo" />
            </div>
            <div className='mt-5'>
                {Menu.map((item)=>(
                  <div onClick={()=>{handleTabClick(item.tittle)}} className='flex items-center mb-5 cursor-pointer text-lg'>
                    {activeTab === item.tittle ? item.isActiveIcon : item.icon}
                    <p className={`${activeTab === item.tittle ? 'font-bold' : 'font-normal'}`}>{item.tittle}</p>
                  </div>
                ))}
            </div>
          </div>
            <div className='flex items-center mb-5 cursor-pointer pb-10'>
              <IoReorderThree className='text-2xl'/>
              <p className='ml-5'>More</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar