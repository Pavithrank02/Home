import React, { useState, useEffect, useRef } from 'react'
import Home from './Home'
import './SignIn.css'


function SignUp() {
  const [data, setData] = useState({
    username: "",
    email: "",
    address: "",
    password: ""
  });
  const previousInputValue = useRef("");
  const inputHanlder = event => {

    const {name, value} = event.target;
    setData(() => { 
      return {
        ...data, [name]: value}});
  }
  useEffect(() => {
    previousInputValue.current = data;
  }, [data]);

  const storeData = (e)  =>{
    const prevData = localStorage.setItem('formValues', JSON.stringify(data));
    console.log( prevData);
  }
    
  const submitForm = (e) => {
    
    e.preventDefault(); 

    console.log(previousInputValue.current);

    const {username, email, address, password} = previousInputValue.current;
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
      storeData();
    }

    setData({ username: '', password: '', email:'', address: "" });

  }
  
  return (
    <div>
      <Home />
      <div className='signin'>
        <form onSubmit={submitForm}>
        <p> Username</p>
        <input type="text"  name="username" onChange={inputHanlder} value={data.username}ref={previousInputValue}/>
        <p> Email</p>
        <input type="text"   name="email" onChange={inputHanlder} value={data.email}ref={previousInputValue}/>
        <p> Address</p>
        <input type="text"   name="address" onChange={inputHanlder} value={data.address} ref={previousInputValue}/>
        <p> Password</p>
        <input type="password"   name="password" onChange={inputHanlder} value={data.password}ref={previousInputValue}/> 
          <button onClick={submitForm}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp