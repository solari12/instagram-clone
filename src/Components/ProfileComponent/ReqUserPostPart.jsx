import React, { useState } from 'react'
import Saved from "../../Assets/saved.png"
import Posts from "../../Assets/profile.png"
import Reels from "../../Assets/reels.png"
import Tagged from "../../Assets/tagged.png"
import ReqUserPostCard from './ReqUserPostCard'
import { Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom' 
const ReqUserPostPart = () => {
    const [activeTab, setActiveTab] = useState("Posts")
    const navigate =  useNavigate()
    const handleActiveTab = (tabName) => {
        setActiveTab(tabName)
        if(tabName === 'Posts'){
            navigate('/username')
        }else{
            navigate('/username')
        }
    }
    const tabs = [
        {
            tabName: "Posts",
            tabIcon: <img src={Posts} alt="" className='w-3 h-3'/>,
            tabContent: <div className='text-xs'>POSTS</div>
        },
        {
            tabName: "Reels",
            tabIcon: <img src={Reels} alt="" className='w-3 h-3'/>,
            tabContent: <div className='text-xs'>REELS</div>
        },
        {
            tabName: "Saved",
            tabIcon: <img src={Saved} alt="" className='w-3 h-3'/>,
            tabContent: <div className='text-xs'>SAVED</div>
        },
        {
            tabName: "Tagged",
            tabIcon: <img src={Tagged} alt="" className='w-3 h-3'/>,
            tabContent: <div className='text-xs'>TAGGED</div>
        }
    ]
  return (
    <div>
        <div className='flex space-x-20 justify-center'>
            {tabs.map((tab)=>(
                <div onClick={() => handleActiveTab(tab.tabName)} className={`flex justify-center items-center py-5 transition-all duration-200 
                    ${activeTab === tab.tabName ? 'border-t-2 border-black text-[#000000]' : 'border-t-2 border-white text-[#7E7E7E]'} cursor-pointer font-semibold`}>
                    {tab.tabIcon}
                    <p className='ml-2'>{tab.tabContent}</p>
                </div>
            ))}
        </div>
        <div>
            <Routes>
                <Route path='' element={<ReqUserPostCard/>}/>
                
            </Routes>
        </div>
    </div>
  )
}

export default ReqUserPostPart