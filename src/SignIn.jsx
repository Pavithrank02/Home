import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import { Routes, Route, Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import TextField from "@mui/material/TextField";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Home from "./Home";
import "./Styles.css";
import { Grid } from "@mui/material";

function SignIn(props) {
  const formChange = () => {
    const { setFormType } = props;
    setFormType("signup");
  };

  return (
    <div className="signin">
      <h2>Login</h2>
      <p>Add Your Credentials Below..</p>
      <IconButton className="icon">
        <AccountCircleIcon sx={{ fontSize: 70, color: "#1957DD" }} />
      </IconButton>
      <form>
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
        {
          <Button
            variant="contained"
            size="medium"
            type="submit"
          >
            Login
          </Button>
        }
        <Typography variant="p">
          If you are new, <Button onClick={formChange}>SignUp </Button>
        </Typography>
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
