import React from 'react'
import Header from './components/Header'
import Footer from "./components/Footer";
import Body from './components/Body'
import './Home.css'

function Home() {
  return (
    <div className='Home-content'>
      <Header />
      <Body />
      <Footer />
    </div>

  )
}

export default Home