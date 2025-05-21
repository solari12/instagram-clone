import React from 'react'

const UserAvatar = ({ size = 10, src }) => {
    const containerSize = `h-${size} w-${size}`;
    const imgSize = `h-${size - 2} w-${size - 2}`;
    return (
        <div>
            <div className={`bg-gradient-to-tr from-[#FFC900] to-[#D300C5] p-[2px] rounded-full flex justify-center items-center ${containerSize}`}>
                <div className="h-full w-full bg-white rounded-full flex justify-center items-center">
                    <img
                        className={`rounded-full ${imgSize}`}
                        src={src}
                        alt="avatar"
                    />
                </div>
            </div>
        </div>
    )
}

export default UserAvatar