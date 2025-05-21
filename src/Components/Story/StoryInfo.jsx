import React from 'react'
const StoryInfo = () => {
    return (
        <div>
            <div>
                <div className='w-full h-full flex justify-center items-center'>
                    <div className="h-16 w-16 bg-gradient-to-tr from-[#FFC900] to-[#D300C5] p-xxs rounded-full flex justify-center items-ceter" >
                        <div className="h-full w-full bg-white rounded-full flex justify-center items-center">
                            <img
                                className="h-14 w-14 rounded-full"
                                src="https://plus.unsplash.com/premium_photo-1722100466194-3896a8ad0279?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-ceter'>
                    <p className='text-xs'>username</p>
                </div>
            </div>
        </div>
    )
}

export default StoryInfo