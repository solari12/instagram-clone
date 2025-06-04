import React from 'react'
import PostCardDetail from './PostCardDetail'
import yaoVideo from "../../Assets/Videos/yao.mp4";
const Postcards = () => {
  return (
    <div className='w-[70%] m-auto'>
      <PostCardDetail mediaType="image" mediaSrc="https://i.pinimg.com/736x/70/f5/e9/70f5e96204fb25ba8966ea8cbc64f3b3.jpg" />
      <PostCardDetail mediaType="video" mediaSrc={yaoVideo} />
      <PostCardDetail mediaType="image" mediaSrc="https://i.pinimg.com/736x/bd/33/07/bd3307649a952d1ca7112b6c7098f7ab.jpg" />
      <PostCardDetail mediaType="image" 
      mediaSrc="https://i.pinimg.com/736x/6a/2b/58/6a2b58f4a09e9e3c700ba2c352230b65.jpg" />
      <PostCardDetail mediaType="image" 
      mediaSrc="https://i.pinimg.com/736x/4f/01/ec/4f01ec8931888126414e2c66dd8e09ae.jpg" />
    </div>
  )
}

export default Postcards