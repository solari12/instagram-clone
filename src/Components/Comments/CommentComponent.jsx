import React, { useState } from 'react';
import { FaHeart, FaRegHeart, FaReply } from 'react-icons/fa';

const CommentComponent = ({ username, avatar, content, timestamp, likes = 0 }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <div className="flex items-start gap-3 py-3 ">
      {/* Avatar */}
      <div className="flex-shrink-0">
        <div className="h-8 w-8 bg-gradient-to-tr from-[#FFC900] to-[#D300C5] p-[1px] rounded-full">
          <div className="h-full w-full bg-white rounded-full overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src={avatar}
              alt={username}
            />
          </div>
        </div>
      </div>

      {/* Comment Content */}
      <div className="flex-grow">
        <div className="flex items-start gap-2">
          <div className="flex-grow">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm">{username}</span>
              <span className="text-sm">{content}</span>
            </div>
            <div className="flex items-center gap-4 mt-1">
              <span className="text-xs text-gray-500">{timestamp}</span>
              {likeCount > 0 && (
                <span className="text-xs font-semibold">{likeCount} likes</span>
              )}
              <button className="text-xs font-semibold">Reply</button>
            </div>
          </div>
          
          {/* Like Button */}
          <button 
            onClick={handleLike}
            className="flex-shrink-0 text-gray-500 hover:text-gray-700"
          >
            {isLiked ? (
              <FaHeart className="text-red-500" />
            ) : (
              <FaRegHeart />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentComponent;