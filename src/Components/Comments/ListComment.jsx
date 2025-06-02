import React from 'react'
import CommentComponent from './CommentComponent'
import './CommentComponet.css'
const commentsData = [
  {
    id: 1,
    username: "john_doe",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop",
    content: "This is amazing! 😍",
    timestamp: "2h",
    likes: 12
  },
  {
    id: 2,
    username: "jane_smith",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
    content: "Love this post! ❤️",
    timestamp: "3h",
    likes: 8
  },
  {
    id: 3,
    username: "mike_wilson",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1000&auto=format&fit=crop",
    content: "Great content! 👏",
    timestamp: "4h",
    likes: 5
  },
  {
    id: 4,
    username: "sarah_parker",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop",
    content: "Beautiful! 🌟",
    timestamp: "5h",
    likes: 15
  },
  {
    id: 5,
    username: "alex_turner",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
    content: "Awesome shot! 📸",
    timestamp: "6h",
    likes: 7
  },
  {
    id: 5,
    username: "alex_turner",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
    content: "Awesome shot! 📸",
    timestamp: "6h",
    likes: 7
  },
  {
    id: 5,
    username: "alex_turner",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
    content: "Awesome shot! 📸",
    timestamp: "6h",
    likes: 7
  },
  {
    id: 5,
    username: "alex_turner",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
    content: "Awesome shot! 📸",
    timestamp: "6h",
    likes: 7
  },
  {
    id: 5,
    username: "alex_turner",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
    content: "Awesome shot! 📸",
    timestamp: "6h",
    likes: 7
  },
  {
    id: 5,
    username: "alex_turner",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
    content: "Awesome shot! 📸",
    timestamp: "6h",
    likes: 7
  },
  {
    id: 5,
    username: "alex_turner",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
    content: "Awesome shot! 📸",
    timestamp: "6h",
    likes: 7
  },
  {
    id: 5,
    username: "alex_turner",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
    content: "Awesome shot! 📸",
    timestamp: "6h",
    likes: 7
  },
  {
    id: 5,
    username: "alex_turner",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
    content: "Awesome shot! 📸",
    timestamp: "6h",
    likes: 7
  },
  {
    id: 5,
    username: "alex_turner",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
    content: "Awesome shot! 📸",
    timestamp: "6h",
    likes: 7
  },
  {
    id: 5,
    username: "alex_turner",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
    content: "Awesome shot! 📸",
    timestamp: "6h",
    likes: 7
  },
  {
    id: 5,
    username: "alex_turner",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
    content: "Awesome shot! 📸",
    timestamp: "6h",
    likes: 7
  },
  {
    id: 5,
    username: "alex_turner",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
    content: "Awesome shot! 📸",
    timestamp: "6h",
    likes: 7
  },
  {
    id: 5,
    username: "alex_turner",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
    content: "Awesome shot! 📸",
    timestamp: "6h",
    likes: 7
  },
  {
    id: 5,
    username: "alex_turner",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
    content: "Awesome shot! 📸",
    timestamp: "6h",
    likes: 7
  }
];

const ListComment = () => {
  return (
    <div className="w-full h-full space-y-2 p-3 scroll-container">
      {commentsData.map((comment) => (
        <CommentComponent
          key={comment.id}
          username={comment.username}
          avatar={comment.avatar}
          content={comment.content}
          timestamp={comment.timestamp}
          likes={comment.likes}
        />
      ))}
    </div>
  )
}

export default ListComment