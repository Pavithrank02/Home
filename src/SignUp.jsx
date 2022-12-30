import React, { useState } from 'react'
import Home from './Home'
import { Grid } from "@mui/material";
import './Styles.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from "@mui/material";


function SignUp(props) {
  const formChange = () => {
    const { setFormType } = props;
    setFormType("signIn");
  };

  return (
    <div className='signUp'>
      <form >
        <h1 className='h'>SignUp</h1>
        <IconButton className="icon">
          <AccountCircleIcon sx={{ fontSize: 70, color: "#1957DD" }} />
        </IconButton>
        <TextField
          label="Username"
          margin="dense"
          color="primary" name="username"  />
        <TextField
          label="Email"
          margin="dense"
          color="primary" name="email"  />
        <TextField
          label="Address"
          margin="dense"
          color="primary" name="address" />
        <TextField
          label="Password"
          margin="dense"
          color="primary" name="password"  />
        <Button variant="contained" size="medium" >Submit</Button>
        <Typography variant="p">
          If you are new, <Button onClick={formChange}>SignIn </Button>
        </Typography>
      </form>
    </div>

  )
}

export default SignUp