import React from 'react'
import pic from "./../images/signin.jpg"

function Body() {
  return (
    <div >
      <div className='body'>
        <h1>Welcome to Website</h1>
        <h4>Click login to Signin</h4>
        <img src={pic} alt='image'/>
      </div>
     
    </div>
  )
}

export default Body