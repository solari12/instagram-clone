import "./ModalComent.css";
import { useEffect, useState } from "react";
import Video from "../Video/Video";
import yaoVideo from "../../Assets/Videos/yao.mp4";
import options from "../../Assets/option.png";
import skeleton from "../../Assets/Image/0553aa0185b5faf2b7a6134eb9b3ac89.jpg";
import ModalOptions from './ModalOptions';
import ListComment from "../Comments/ListComment";
import { FaHeart, FaRegHeart, FaRegComment, FaRegPaperPlane, FaRegBookmark, FaBookmark } from 'react-icons/fa';

const ModalComent = ({ isOpen, onClose, imgPost, avatar = '', name = 'name', caption, detail }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [likesCount, setLikesCount] = useState(219);
  const [newComment, setNewComment] = useState("");

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      // Add comment logic here
      setNewComment("");
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open-comment");
    } else {
      document.body.classList.remove("modal-open-comment");
    }
    return () => {
      document.body.classList.remove("modal-open-comment");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <img src={imgPost} alt="" className="w-full h-full object-contain modal-content-comment" />
        <div className="comment-section w-full flex flex-col justify-between">
          {/* Post Header */}
          <div className="flex justify-between border-b-2 border-gray-200 p-2">
            <div className="flex justify-center items-center space-x-3">
              <div className="w-full h-full flex justify-center items-center">
                <div className="h-10 w-10 bg-gradient-to-tr from-[#FFC900] to-[#D300C5] p-xxs rounded-full flex justify-center items-ceter">
                  <div className="h-full w-full bg-white rounded-full flex justify-center items-center">
                    <img
                      className="h-8 w-8 rounded-full object-cover"
                      src={avatar}
                      alt={name}
                    />
                  </div>
                </div>
              </div>
              <p className="font-semibold">{name}</p>
              <div>
                <svg
                  width="1rem"
                  height="1rem"
                  viewBox="0 0 40 40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 19.998 3.094 L 14.638 0 l -2.972 5.15 H 5.432 v 6.354 L 0 14.64 L 3.094 20 L 0 25.359 l 5.432 3.137 v 5.905 h 5.975 L 14.638 40 l 5.36 -3.094 L 25.358 40 l 3.232 -5.6 h 6.162 v -6.01 L 40 25.359 L 36.905 20 L 40 14.641 l -5.248 -3.03 v -6.46 h -6.419 L 25.358 0 l -5.36 3.094 Z m 7.415 11.225 l 2.254 2.287 l -11.43 11.5 l -6.835 -6.93 l 2.244 -2.258 l 4.587 4.581 l 9.18 -9.18 Z"
                    fill="#0095F6"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img src={options} alt="" className="w-6 h-6 cursor-pointer" onClick={handleOpenModal} />
            </div>
            <ModalOptions isOpen={isModalOpen} onClose={handleCloseModal} />
          </div>

          {/* Comments Section */}
          <div className="flex-grow overflow-y-auto">
            <ListComment />
          </div>

          {/* Post Actions */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center space-x-4">
                <button onClick={handleLike} className="focus:outline-none">
                  {isLiked ? (
                    <FaHeart className="text-red-500 text-2xl" />
                  ) : (
                    <FaRegHeart className="text-2xl hover:text-gray-600" />
                  )}
                </button>
                <button className="focus:outline-none">
                  <FaRegComment className="text-2xl hover:text-gray-600" />
                </button>
                <button className="focus:outline-none">
                  <FaRegPaperPlane className="text-2xl hover:text-gray-600" />
                </button>
              </div>
              <button onClick={handleSave} className="focus:outline-none">
                {isSaved ? (
                  <FaBookmark className="text-2xl" />
                ) : (
                  <FaRegBookmark className="text-2xl hover:text-gray-600" />
                )}
              </button>
            </div>
            {likesCount > 0 && (
              <p className="font-semibold text-sm mb-1">{likesCount} likes</p>
            )}
            {caption && (
              <div className="text-sm">
                <span className="font-semibold mr-2">{name}</span>
                {caption}
              </div>
            )}
          </div>

          {/* Add Comment Section */}
          <div className="border-t border-gray-200 p-4">
            <form onSubmit={handleAddComment} className="flex items-center gap-2">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
                className="flex-grow outline-none text-sm"
              />
              <button
                type="submit"
                className={`font-semibold text-sm ${newComment.trim() ? 'text-blue-500' : 'text-blue-300'}`}
                disabled={!newComment.trim()}
              >
                Post
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComent;
