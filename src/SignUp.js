import React, { useState } from 'react'
import Home from './Home'
import './SignIn.css'


function SignUp() {
  const [data, setData] = useState({
    username: "",
    email: "",
    address: "",
    password: ""
  });
  const inputHanlder = event => {

    const {name, value} = event.target;
    setData(() => { 
      return {
        ...data, [name]: value}});
  }
    
  const submitForm = (e) => {
    
    e.preventDefault(); 
    const {username, email, address, password} = data;
    if(username === "") {
      alert("Please enter username")

    } else if(!email.includes("@")) {
      alert("Please enter correct email")

    }
    else if(address === "") {
      alert("Please enter correct address")
    }
    else if(password.length < 5 ) {
      alert("Please enter valid password")
    } else{
      //console.log("details entered")
      localStorage.setItem('formValues', JSON.stringify(data));
    }

  }
  return (
    <div>
      <Home />
      <div className='signin'>
        <form onSubmit={submitForm}>
        <p> Username</p>
        <input type="text"  name="username" onChange={inputHanlder} value={data.username}/>
        <p> Email</p>
        <input type="text"   name="email" onChange={inputHanlder} value={data.email}/>
        <p> Address</p>
        <input type="text"   name="address" onChange={inputHanlder} value={data.address}/>
        <p> Password</p>
        <input type="password"   name="password" onChange={inputHanlder} value={data.password}/> 
          <button onClick={submitForm}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp