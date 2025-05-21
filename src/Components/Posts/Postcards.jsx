import React from 'react'
import PostCardDetail from './PostCardDetail'
const Postcards = () => {
  return (
    <div className='w-[70%] m-auto'>
      {[1,1,1,1,1,1,1].map((item)=><PostCardDetail className="flex-shrink-0" />)}
    </div>
  )
}

export default Postcards