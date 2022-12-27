import React from "react";
import { IconButton } from "@mui/material";
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import TextField from '@mui/material/TextField';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import "./Styles.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';import Home from "./Home";


function SignIn() {
  return (
    <div className="signin">
          <h2>Login</h2>
          <p>Add Your Credentials Below..</p>
          <IconButton className="icon">
            <AccountCircleIcon sx={{ fontSize: 70, color: "#1957DD" }} />
          </IconButton>
          <form >
            <TextField
              margin="dense"
              color="primary"
              id="outlined-multiline-flexible"
              label="Username"
              name="username"
              
            />
            <TextField
              margin="normal"
              id="outlined-multiline-flexible"
              sx={{ color: "white" }}
              label="Password"
              name="password"
               />
            {<Button variant="contained" size="medium" type="submit">Login</Button>}
          </form>
          <p>------or Signin Through------</p>
          <div className="log">
            <GoogleIcon sx={{ color: "red" }} />
            <FacebookIcon sx={{ color: "blue" }} />
            <TwitterIcon sx={{ color: "#19A2DD" }} />
          </div>
        </div>
  );
}

export default SignIn;
