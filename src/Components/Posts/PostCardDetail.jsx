import React from 'react'
import UserAvatar from '../User/UserAvatar'
const PostCardDetail = () => {
    return (
        <div>
            <div className=' w-full h-full border-b border-b border-l-slate-500'>
                <div>
                    <div className='w-full h-full flex justify-center items-center'>
                            <UserAvatar size={10} borderWidth={2} src='https://plus.unsplash.com/premium_photo-1722100466194-3896a8ad0279?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
                    </div>
                    <div>
                        <p>UserName</p>
                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default PostCardDetail