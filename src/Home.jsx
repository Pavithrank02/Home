import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div>
      <div className="home">
        <Link to='/'>
          <h1>Home </h1>
        </Link>
        <Link to='/signUp'>
          <h2> SignUp </h2>
        </Link>
        <Link to='/signIn'>
          <h2> SignIn </h2>
        </Link>
      </div>
    </div>

  )
}

export default Home