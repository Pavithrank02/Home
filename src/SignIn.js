import React from "react";
import { useState } from "react";
import { IconButton } from "@mui/material";
import "./SignIn.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';import Home from "./Home";
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
    const { username, password } = data;
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
      <Home />
      <form>
        <div className="signin">
          <IconButton>
            <AccountCircleIcon sx={{ fontSize: 70 }} />
          </IconButton>
          <p> Username</p>
          <input
            type="text"
            name="username"
            onChange={inputHanlder}
            value={data.username}
          />
          <p> Password</p>
          <input type="password" name="password" onChange={inputHanlder} value={data.password} />
          {<button onClick={submitButton} type="submit">Login</button>}
        </div>
      </form>
    </div>
  );
}

export default SignIn;
