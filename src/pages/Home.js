import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className="home-header">Welcome to Anychat!</div>
      <div className="home-information">Anychat is a place to post anything on your mind. Create the best post to get to the top of the leaderboard. Join the fun now!</div>
      <Link to='/register'>
        <button className="link">Register</button>
      </Link>
      <div className="accountLink">
        Already have an account? <Link to='/login' className="login-text">Login</Link>
      </div>
    </>
  )
}

export default Home