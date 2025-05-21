import React from 'react'
import Storycircle from '../../Components/Story/Storycircle'
import PostCards from '../../Components/Posts/Postcards'
const HomePage = () => {
  return (
    <div className='w-full'>
      <div className='flex justify-center items-center w-full'>
        <div className='w-[64%]'>
          <div>
            <Storycircle/>
          </div>
          <div>
            <PostCards/>
          </div>
        </div>
        <div className='flex-1'>
          rigtpage
        </div>
      </div>
    </div>
  )
}

export default HomePage