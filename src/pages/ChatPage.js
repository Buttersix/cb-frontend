import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./ChatPage.css"
import Card from '../components/Card'
import PostForm from '../components/PostForm'

const ChatPage = () => {
  const [posts, getPosts] = useState([])
  const [winner, setWinner] = useState("")

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

  useEffect(() => {
    setWinner("butte134")
  }, [])

  return (
    <>
      <div className="previous-winner-info">Previous winner: {winner}</div>
      <div className="new-post-container" id="post-container">
        <PostForm />
      </div>
      <div className="posts-container" id="posts-container">
        {posts.map(post => (
          <Card key={post.id} post={post}/>
        ))}
      </div>
    </>
  )
}

export default ChatPage