import React from 'react'
import { Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from "./components/Footer";

import './Home.css'

function Home() {
  return (
    <div>
    <Header />
      <div className="home">
        <Link to='/'>
          <h1>Home </h1>
        </Link>
        {/* <Link to='/signUp'>
          <h2> SignUp </h2>
        </Link> */}
        <Link to='/signIn'>
          <h2> SignIn </h2>
        </Link>
      </div>
      <div className='footer'>
      <Footer />
      </div>
     
    </div>

  )
}

export default Home