import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { IconButton } from "@mui/material";
import './SignIn.css'
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import Home from './Home';


function SignIn() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const inputHanlder = event => {
    const {name, value} = event.target;
    setData((prev) => {
      return{...prev, [name]: value}});
  }
  useEffect(() => {
     localStorage.setItem("formValues", JSON.stringify(data));
     }, [data]);
  const submitButton = (e) => {
    
    e.preventDefault(); 
  }
  return (
    <div>
      <Home />
      <div className='signin'>
        <IconButton>
          <AccountCircleRoundedIcon sx={{ fontSize: 70 }} />
        </IconButton>
        <p> Username</p>
        <input type="text"  name="username" onChange={inputHanlder} value={data.username}/>
        <p> Password</p>
        <input type="password"   name="password" onChange={inputHanlder} value={data.password}/>
        {<button onClick={submitButton}>Login</button>}
      </div>
    </div>

  )
}

export default SignIn