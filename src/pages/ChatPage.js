import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./ChatPage.css"
import Card from '../components/Card'

const ChatPage = () => {
  const [posts, getPosts] = useState([])

  const fetchPosts = async () => {
    await axios
      .get(`https://mi7mbwe1tf.execute-api.us-east-1.amazonaws.com/posts`)
      .then((response) => {
        const data = response.data
        getPosts(data)
      })
      .catch((error) => console.error(`Error: ${error}`))
  }

  useEffect(() => {
    fetchPosts()
  }, [posts])

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