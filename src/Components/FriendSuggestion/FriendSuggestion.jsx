import React from 'react'

const FriendSuggestion = ({avatar, name, suggest}) => {
  return (
    <div className='flex justify-between items-center'>
        <div className='flex items-center space-x-4'>
                <img src={avatar} alt="" className='h-12 w-12 rounded-full object-cover' />
            <div>
                <p className='font-semibold text-sm'>{name}</p>
                <p className='text-gray-500 text-xs'>{suggest}</p>
            </div>
            
        </div>
        <p className='text-xs font-semibold' style={{ color: '#394AE4' }}>Follow</p>
    </div>
  )
}

export default FriendSuggestion