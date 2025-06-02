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
          <Homeright/>
        </div>
      </div>
    </div>
  )
}

export default HomePage