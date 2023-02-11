import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <>
      <div className="home-header">Welcome to Campus Chat!</div>
      <div className="home-information">Campus Chat is a place to post anything on your mind! What you post is only seen by students at your campus!</div>
      <div className="loginButton">
        <img src="google.png" alt="" className="icon" />
        Sign in with Google
      </div>
    </>
  )
}

export default Home