import React from 'react'
import { FaRegImages } from "react-icons/fa";
const ReqUserPostPart = () => {
    const tabs = [
        {
            tabName: "Posts",
            tabIcon: <FaRegImages className='text-xl'/>,
            tabContent: <div>Posts</div>
        },
        {
            tabName: "Reels",
            tabIcon: <FaRegImages className='text-xl'/>,
            tabContent: <div>Reels</div>
        },
        {
            tabName: "Reels",
            tabIcon: <FaRegImages className='text-xl'/>,
            tabContent: <div>Reels</div>
        },
        {
            tabName: "Reels",
            tabIcon: <FaRegImages className='text-xl'/>,
            tabContent: <div>Reels</div>
        }
    ]
  return (
    <div>
        <div className='flex space-x-5 justify-center'>
            {tabs.map((tab)=>(
                <div className='flex items-center'>
                    {tab.tabIcon}
                    <p>{tab.tabName}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ReqUserPostPart