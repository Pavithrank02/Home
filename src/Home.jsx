import React from 'react'
import BodyContent from './components/BodyContent';
import Header from './components/Header'
import Footer from "./components/Footer";

import './Home.css'

function Home() {
  return (
    <div>
    <Header />
      <div>
      <BodyContent />
      </div>
      <div className='footer'>
      <Footer />
      </div>
     
    </div>

  )
}

export default Home