import React from 'react'
import pic from "./../images/signin.jpg"
import { Link } from 'react-router-dom'

function Body() {
  return (
    <div>
      <div className='body'>
        <h1>Welcome to Website</h1>
        <h4>If new, Click here to <span> <Link to='/signup' >
        SignUp
            </Link></span></h4>
        <img src={pic} alt='image'/>
      </div>
     
    </div>
  )
}

export default Body