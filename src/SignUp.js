import React, { useState } from 'react'
import Home from './Home'
import './SignIn.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from "@mui/material";


const initialData = {
  username: "",
  email: "",
  address: "",
  password: ""
}
function SignUp() {
  const [data, setData] = useState(initialData);
  const inputHanlder = event => {

    const { name, value } = event.target;
    setData(() => {
      return {
        ...data, [name]: value
      }
    });

  }
  const storeData = () => {
    let names = JSON.parse(localStorage.getItem("formsValues") )|| []
    console.log("names", names);
    let newArr = [...names, data];
    console.log(newArr);
    localStorage.setItem("formsValues", JSON.stringify(newArr))



    // localStorage.setItem("formsValues2", JSON.stringify(...values))
    // const parsedValues = values ? JSON.parse(values) : "[]";
    // const val = Object.entries(parsedValues)
    // 
    // 
    // console.log("names2", newArr);
  }
  const submitForm = (e) => {

    e.preventDefault();

    //console.log(previousInputValue.current);
    const { username, email, address, password } = data;
    if (username === "") {
      alert("Please enter username")

    } else if (!email.includes("@")) {
      alert("Please enter correct email")

    }
    else if (address === "") {
      alert("Please enter correct address")
    }
    else if (password.length < 5) {
      alert("Please enter valid password")
    } else {
      //console.log("details entered")
      // localStorage.setItem("formsValues", JSON.stringify([data]));
     
      setData(initialData);
      storeData();
      //addData();
    }
  }
  return (
    <div>
      <div >
        <form onSubmit={submitForm} className='signin'>
          <h1 className='h'>SignUp</h1>
          <IconButton className="icon">
            <AccountCircleIcon sx={{ fontSize: 70, color: "#1957DD"}}  />
          </IconButton>
          <TextField
            label="Username"
            margin="dense"
            color="primary" name="username" onChange={inputHanlder} value={data.username} />
          <TextField
            label="Email"
            margin="dense"
            color="primary" name="email" onChange={inputHanlder} value={data.email} />
          <TextField
            label="Address"
            margin="dense"
            color="primary" name="address" onChange={inputHanlder} value={data.address} />
          <TextField
            label="Password"
            margin="dense"
            color="primary" name="password" onChange={inputHanlder} value={data.password} />
          <Button variant="contained" size="medium" onClick={submitForm}>Submit</Button>
        </form>
      </div>
    </div>
  )
}

export default SignUp