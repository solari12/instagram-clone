import React from 'react'
import ProfileUserDetails from '../../Components/ProfileComponent/ProfileUserDetails'
import ReqUserPostPart from '../../Components/ProfileComponent/ReqUserPostPart'
const Profile = () => {
  return (
    <div className='px-20'>
        <div>
            <ProfileUserDetails />
            <ReqUserPostPart />
        </div>
    </div>
  )
}

export default Profile