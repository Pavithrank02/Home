import React from 'react'
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height:500,
}));

function BodyContent() {
  return (
    <div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
          <Item><img src="./images/signin.jpg" alt="this" /></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><p>This is right side</p></Item>
        </Grid>
        
        
      </Grid>
      {/* <div className="home">
    <Link to='/'>
      <h1>Home </h1>
    </Link>
    {/* <Link to='/signUp'>
      <h2> SignUp </h2>
    </Link> }
    <Link to='/signIn'>
      <h2> SignIn </h2>
    </Link>
  </div> */}
  </div>
  )
}

export default BodyContent