import React from 'react'
import StoryInfo from './StoryInfo'

const Storycircle = () => {
    return (
        <div>
            <div className='w-full flex p-10 space-x-4 overflow-x-auto'>
                {[1,1,1,1,1,1,1].map((item)=><StoryInfo className="flex-shrink-0" />)}
            </div>
        </div>
    )
}

export default Storycircle