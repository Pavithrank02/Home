import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import SignIn from './../SignIn';
import SignUp from './../SignUp';
import pic from "./../images/signin.jpg"
import './../Home.css'

function Body() {
  return (
    <Grid direction="column" justifyContent="center">
      <Grid container spacing={2} mx={10} xs={6}>
        <div className='text-home'>
          <h1>Welcome to Website</h1>
          <h4>If new, Click here to <span> <Link to='/signup' >
            SignUp
          </Link></span></h4>
          <img className='image-sign' src={pic} alt='image' />
          <Routes>
          <Route path="/signIn" element={<SignIn />} />
        </Routes>
        <Routes>
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
        </div>
      </Grid>
    </Grid>
  )
}

export default Body