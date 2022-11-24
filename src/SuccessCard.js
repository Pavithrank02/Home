import React from 'react'
import './Success.css'
import { Link } from 'react-router-dom'

function SuccessCard() {
  return (
    <div className='signin'>
     <Link to='/'>
          <h1>Success </h1>
        </Link>
    </div>
  )
}

export default SuccessCard