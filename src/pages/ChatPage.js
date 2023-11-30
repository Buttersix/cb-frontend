import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./ChatPage.css"
import Card from '../components/Card'
// import PostForm from '../components/PostForm'

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
  }, [])

  return (
    <div className="main-body">
      <div className="new-post-container">
        {/*<PostForm />*/}
        Welcome to the personal site of Billy Buttermore. This is my dev blog for now, and will feature updates on any projects I am currently working on!
      </div>
      <div className="posts-container" id="posts-container">
        {posts.map(post => (
          <Card key={post.id} post={post}/>
        ))}
      </div>
    </div>
  )
}

export default ChatPage