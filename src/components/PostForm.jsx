import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import "./PostForm.css"

const PostForm = () => {
  const history = useNavigate()

  const currentUser = 'butte134'

  const [postData, setPostData] = useState({
    user: currentUser, message: '', upvotes: 0
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await 
        axios
          .post(`https://mi7mbwe1tf.execute-api.us-east-1.amazonaws.com/posts`,
          {
            user: postData.user,
            message: postData.message,
            upvotes: 0,
          }
      )
      .then((response) => {
        setPostData(response.data)
        setPostData({ user: currentUser, message: '', upvotes: 0 })
        window.location.reload(true)
        history('/home')
      })
      .catch((error) => console.error(`Error: ${error}`))
    } catch (error) {
      console.error(`Error: ${error}`)
    }

  }

  return (
    <>
      <form autoComplete="off" noValidate className="post-form" onSubmit={handleSubmit}>
        <textarea className="post-input" placeholder="Post something..." name="message" label="Post something..." value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} maxLength="100" />
        <div className={postData.message.length === 100 ? "message-length100" : postData.message.length > 80 ? "message-length80" : "message-length"}>{postData.message.length}</div>
        <button className="post-btn" type="submit">POST</button>
      </form>
    </>
  )
}

export default PostForm