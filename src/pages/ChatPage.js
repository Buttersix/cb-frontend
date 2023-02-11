import React from 'react'
import "./ChatPage.css"
import { posts } from "../data"
import Card from '../components/Card'

const ChatPage = () => {
  return (
    <>
      <div className="settings">
        
      </div>
      <div className="new-post-container">

      </div>
      <div className="posts-container">
        {posts.map(post => (
          <Card key={post.id} post={post}/>
        ))}
      </div>
    </>
  )
}

export default ChatPage