import React from 'react'
import Grid from '@mui/material/Grid';
import pic from "./../images/signin.jpg"
import { Link } from 'react-router-dom'

function Body() {
  return (
    <Grid container spacing={3} mx={10} justifyContent="flex-start" alignItems="center">
      <Grid item xs={6}>
        <div className='text-home'>
          <h1>Welcome to Website</h1>
          <h4>If new, Click here to <span> <Link to='/signup' >
            SignUp
          </Link></span></h4>
        </div>
        <img className='image-sign' src={pic} alt='image' />
      </Grid>
    </Grid>
  )
}

export default Body