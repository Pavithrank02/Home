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
  const history = useNavigate();
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [formValChange, setFormValChange] = useState("");
  const inputHanlder = (event) => {
    const { name, value } = event.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  // useEffect(() => {
  //     const inputVal = JSON.parse(localStorage.getItem('formValues'));
  //     if (inputVal) {
  //      setInputVal(inputVal);
  //     }
  //   }, []);
  const formChange = () => {
    
    console.log(props)
   props = {
    setFormType: "signUp"
   }
    
  }
  const submitButton = (e) => {
    e.preventDefault();

    const userDetails = localStorage.getItem("formsValues");
    //console.log(userDetails)
    // console.log(user);

    // if(user.username === username && user.password === password){
    //   console.log("match");
    // } else {
    //   console.log("doesnt match");
    // }
    const { username, password } = data;
    if (username === "") {
      alert("Please enter username");
    } else if (password.length < 5) {
      alert("Please enter valid password");
    } else {
      if (userDetails && userDetails.length) {
        const userData = JSON.parse(userDetails);
        console.log(userData);
        //console.log(userData.username);
        if (userData.username === username && userData.password === password) {
          console.log("login successful");
          history("/success");
        } else if (userData.length === "") {
          alert("please enter details");
        }
      }
    }
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
          onChange={inputHanlder}
          value={data.username}
        />
        <TextField
          margin="normal"
          id="outlined-multiline-flexible"
          sx={{ color: "white" }}
          label="Password"
          name="password"
          onChange={inputHanlder}
          value={data.password}
        />
        {
          <Button
            variant="contained"
            size="medium"
            onClick={submitButton}
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
