import React from 'react'
import Storycircle from '../../Components/Story/Storycircle'
import PostCards from '../../Components/Posts/Postcards'
import Homeright from '../../Components/Homeright/Homeright'
const HomePage = () => {
  return (
    <div className='w-full'>
      <div className='flex justify-center items-start w-full'>
        <div className='w-[64%]'>
          <div>
            <Storycircle/>
          </div>
          <div>
            <PostCards/>
          </div>
        </div>
        <div className='flex-1 flex justify-center items-start'>
          <Homeright image={"https://i.pinimg.com/736x/10/2a/40/102a40822dd46c8ab65b6b9e50b898f8.jpg"} name={"6igmoid"} fullname={"Nguyễn Văn Tuấn"} />
        </div>
      </div>
    </div>
  )
}

export default HomePage