import Options from "../../Assets/option.png";
import Favorite from "../../Assets/favorite.png";
import BubbleChat from "../../Assets/bubble-chat.png";
import Send from "../../Assets/send.png";
import Save from "../../Assets/saved.png";
import "../../Components/Posts/PostCardDetail.css";
import { useState } from "react";
import ModalOptions from "../Modal/ModalOptions";
import Video from "../Video/Video";
import yaoVideo from "../../Assets/Videos/yao.mp4";
import ModalComent from "../Modal/ModalComent";

const PostCardDetail = ({ mediaType = 'video', mediaSrc }) => {
  const [comment, setComment] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalComentOpen, setIsModalComentOpen] = useState(false);

  const handleOpenModalComent = () => {
    setIsModalComentOpen(true);
  };
  const handleCloseModalComent = () => {
    setIsModalComentOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className=" w-full h-full border-b border-b border-l-slate-500 space-y-3 mb-5">
        <div className="flex justify-between items-center w-full">
          <div className="flex justify-left itmes-center space-x-1">
            <div className="w-full h-full flex justify-center items-center">
              <div className="h-10 w-10 bg-gradient-to-tr from-[#FFC900] to-[#D300C5] p-xxs rounded-full flex justify-center items-ceter">
                <div className="h-full w-full bg-white rounded-full flex justify-center items-center">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://plus.unsplash.com/premium_photo-1722100466194-3896a8ad0279?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-sm font-semibold">lowkey.hoctiengnhat</p>
            </div>
            <div className="flex justify-center items-center space-x-0.5">
              <div className="h-full">
                <p className="text-xl font-semibold text-gray-500">.</p>
              </div>
              <p className="text-sm text-gray-500">3d</p>
            </div>
          </div>
          <div className="flex">
            <img
              src={Options}
              alt=""
              className="w-4 h-4 hover:opacity-40 transition duration-200 cursor-pointer"
              onClick={handleOpenModal}
            />
          </div>
        </div>
        <div className="w-full">
          {mediaType === "video" ? (
            <Video src={mediaSrc} />
          ) : (
            <img
              src={mediaSrc}
              alt="media"
              className="w-full object-contain rounded"
            />
          )}
        </div>
        <div className="flex justify-between items-center pt-1">
          <div className="flex justify-center items-center space-x-3">
            <div>
              <img
                className="w-6 h-6 hover:opacity-40 transition duration-200 cursor-pointer"
                src={Favorite}
                alt=""
              />
            </div>
            <div>
              <img
                onClick={handleOpenModalComent}
                className="w-6 h-6 hover:opacity-40 transition duration-200 cursor-pointer"
                src={BubbleChat}
                alt=""
              />
            </div>
            <div>
              <img
                className="w-6 h-6 hover:opacity-40 transition duration-200 cursor-pointer"
                src={Send}
                alt=""
              />
            </div>
          </div>
          <div>
            <div>
              <img
                className="w-5 h-5 hover:opacity-40 transition duration-200 cursor-pointer"
                src={Save}
                alt=""
              />
            </div>
          </div>
        </div>
        <div>
          <p>100 likes</p>
        </div>
        <div>
          <div>
            <p>name</p>
            <p>tittle</p>
          </div>
          <div>
            <p>description</p>
          </div>
          <div>#hastag</div>
          <div>
            <p>view all 100 comments</p>
          </div>
          <div className="flex justify-between space-x-1 items-center">
            <textarea
              placeholder="Add a comment..."
              className="w-full resize-none text-sm placeholder-gray-500 focus:outline-none"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            {comment.trim() !== "" && (
              <p className="text-sm font-semibold text-cyan-500 cursor-pointer hover:opacity-80 transition">
                Post
              </p>
            )}
            <div className="pl-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-gray-500"
              >
                <path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <ModalOptions isOpen={isModalOpen} onClose={handleCloseModal} />
      <ModalComent
        isOpen={isModalComentOpen}
        onClose={handleCloseModalComent}
        imgPost={
          "https://scontent.fdad1-4.fna.fbcdn.net/v/t1.6435-9/168097618_299591011730966_6867439069244117810_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHdQU1K4xDuznr4W2CDtTjWqJSw8hTVZzColLDyFNVnMKVoAOG6BZlZGl4QaMFJN5c0Na9xoXLzilVYfcawXJKy&_nc_ohc=Ts4OuJNcNFYQ7kNvwGwATpN&_nc_oc=AdlEgLDc_YUdq1c_zvunXZczUeMBIuwYcg3CmjmU6G9eBpxmYvkOAKOAPMNu25rybLxJZldH1djb22CG0AhBxrLP&_nc_zt=23&_nc_ht=scontent.fdad1-4.fna&_nc_gid=NOtOvTxukoS9GqijeAznqg&oh=00_AfKO-gz58YZ3W2MLjOBrOZSHa24WpoNA6p13IbIvNYAHug&oe=6863A3EB"
        }
        avatar={
          "https://i.pinimg.com/736x/77/9c/2c/779c2cabb9055ef0803af0ff09c0ba1d.jpg"
        }
        name={"6igmoid"}
        caption={""}
        detail={""}
      />
    </div>
  );
};

export default PostCardDetail;
