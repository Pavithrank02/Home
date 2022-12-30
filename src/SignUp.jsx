import React, { useState } from 'react'
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from "@mui/material";
import './Styles.css'


function SignUp(props) {
  const formChange = () => {
    const { setFormType } = props;
    setFormType("signIn");
  };

  return (
    <Box sx={{ border: 2, borderColor: 'primary.main', borderRadius: '2%', height: '95%', width: '70%' }}>
      <Grid container display="flex" direction="column" justifyContent="center" alignItems="center">
      <Typography variant="h4" marginTop={2} sx={{ fontWeight: 'Bold' }}>
          SignUp
        </Typography>
        <IconButton className="icon">
          <AccountCircleIcon sx={{ fontSize: 70, color: "#1957DD" }} />
        </IconButton>
        <form className='form-item'>
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
        </form>
        <Typography variant="p">
          Already Existing User, <Button onClick={formChange}>SignIn </Button>
        </Typography>
      </Grid>
    </Box>

  )
}

export default SignUp