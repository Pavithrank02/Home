import React from 'react'
import Header from './components/Header'
import Footer from "./components/Footer";
import Body from './components/Body';

import './Home.css'

function Home() {
  return (
    <div>
    <Header />
      <div>
        <Body />
      </div>
      <div className='footer'>
      <Footer />
      </div>
     
    </div>

  )
}

export default Home