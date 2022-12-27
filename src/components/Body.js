import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import SignIn from './../SignIn';
import SignUp from './../SignUp';
import pic from "./../images/signin.jpg"
import './../Home.css'

function Body() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <Grid container  spacing={12}>
      <Grid item xs={6} md={6}>
        <Item>
          <h1>Welcome to Website</h1>
          <h4>If new, Click here to <span> <Link to='/signup' >
            SignUp
          </Link></span></h4>
          <img className='image-sign' src={pic} alt='image' />
        </Item>
      </Grid>
      <Grid item xs={6} md={4} justifyContent="center" alignItems="center">
      <Item>
          <Routes>
            <Route path="/signIn" element={<SignIn />} />
          </Routes>
          <Routes>
            <Route path="/signUp" element={<SignUp />} />
          </Routes>
        </Item>
      </Grid>
    </Grid>
  )
}

export default Body