import React from "react";
import { useState } from "react";
import { IconButton } from "@mui/material";
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import TextField from '@mui/material/TextField';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import "./SignIn.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; import Home from "./Home";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const history = useNavigate();
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const inputHanlder = (event) => {
    const { name, value } = event.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  // useEffect(() => {
  //     const inputVal = JSON.parse(localStorage.getItem('formValues'));
  //     if (inputVal) {
  //      setInputVal(inputVal);
  //     }
  //   }, []);
  const submitButton = (e) => {
    e.preventDefault();
    const userDetails = localStorage.getItem("formValues");
    // console.log(user);

    // if(user.username === username && user.password === password){
    //   console.log("match");
    // } else {
    //   console.log("doesnt match");
    // }
    const { username, password } = [data];
    if (username === "") {
      alert("Please enter username");
    } else if (password.length < 5) {
      alert("Please enter valid password");
    } else {
      if (userDetails && userDetails.length) {
        const userData = JSON.parse(userDetails);
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
    <div>
      <form>
        <div className="container">
          <div className="signin">
            <h2>Login</h2>
            <p>Add Your Credentials Below..</p>
            <IconButton className="icon">
              <AccountCircleIcon sx={{ fontSize: 70, color: "#1957DD" }} />
            </IconButton>
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
              value={data.password} />
            {<Button variant="contained" size="medium" onClick={submitButton} type="submit">Login</Button>}
            <p>------or Signin Through------</p>
            <div className="log">
              <GoogleIcon sx={{ color: "red" }} />
              <FacebookIcon sx={{ color: "blue" }} />
              <TwitterIcon sx={{ color: "#19A2DD" }} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
