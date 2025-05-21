import React from 'react'

const UserAvatar = ({ size = 10, src, borderWidth = 3 }) => {
    return (
        <div className="relative">
            <div className={`h-${size} w-${size} bg-gradient-to-tr from-[#FFC900] to-[#D300C5] p-[${borderWidth}px] rounded-full flex justify-center items-center`}>
                <div className="h-full w-full bg-white rounded-full flex justify-center items-center overflow-hidden">
                    <img
                        className={`h-[calc(100%-${borderWidth * 2}px)] w-[calc(100%-${borderWidth * 2}px)] rounded-full object-cover`}
                        src={src}
                        alt="avatar"
                    />
                </div>
            </div>
        </div>
    )
}

export default UserAvatar