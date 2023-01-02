import React, { useState } from 'react'
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import Snackbar from '@mui/material/Snackbar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import './Styles.css'
import MuiAlert from '@mui/material/Alert';


const initialData = {
  username: "",
  email: "",
  address: "",
  password: ""
}
const initialError = {
  username: false,
  email: false,
  address: false,
  password: false,
}
function SignUp(props) {

  const [data, setData] = useState(initialData);
  const [error, setError] = useState(initialError);
  
  const inputHanlder = event => {

    const { name, value } = event.target;
    setData(() => {
      return {
        ...data, [name]: value
      }
    });

  }
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    
    setOpen(false);
  };
  const storeData = () => {
    let names = JSON.parse(localStorage.getItem("formsValues")) || []
    // console.log("names", names);
    let newArr = [...names, data];
    //console.log(newArr);
    localStorage.setItem("formsValues", JSON.stringify(newArr))
  }
  const formChange = () => {
    const { setFormType } = props;
    setFormType("signIn");
  };
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  const submitForm = (e) => {

    e.preventDefault();
    
    // console.log(props.error);
    const { username, email, address, password } = data;
    if (username == "") {
     

    } else if (!email.includes("@")) {
      alert("Please enter correct email")

    }
    else if (address === "") {
      alert("Please enter correct address")
    }
    else if (password.length < 5) {
      alert("Please enter valid password")
    } else {
      setData(initialData);
      storeData();
      setOpen(true);
    }
  }

  return (
    <Box sx={{ border: 2, mt: 3, borderColor: 'primary.main', borderRadius: '2%', height: '95%', width: '70%' }}>
      <Grid container display="flex" direction="column" justifyContent="center" alignItems="center">
        <Typography variant="h4" marginTop={2} sx={{ fontWeight: 'Bold' }}>
          SignUp
        </Typography>
        <IconButton className="icon">
          <AccountCircleIcon sx={{ fontSize: 70, color: "#1957DD" }} />
        </IconButton>
        <form className='form-item' noValidate
      autoComplete="off">
         <TextField
            label="Username"
            margin="dense"
            color="primary"
            name="username"
            onChange={inputHanlder}
            value={data.username}
            errorMessage="Username should be written"
            error={!data.username}
            helperText={data.username ? "": 'Field should not be empty'}
          />
          
          <TextField
            label="Email"
            margin="dense"
            color="primary"
            name="email"
            onChange={inputHanlder}
            value={data.email}
            required="true"
            errorMessage="Username should be written"
          />
          <TextField
            label="Address"
            margin="dense"
            color="primary"
            name="address"
            onChange={inputHanlder}
            value={data.address}
            required
            errorMessage="Username should be written"
          />
          <TextField
            label="Password"
            margin="dense"
            color="primary"
            name="password"
            onChange={inputHanlder}
            value={data.password}
            errorMessage="Username should be written"
          />
          <Button variant="contained" size="medium" onClick={submitForm}>Submit</Button>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="User Account Created Successfully!"
            action={action}
            required
          />
        </form>
        <Typography variant="p">
          Already Existing User, <Button onClick={formChange}>SignIn </Button>
        </Typography>
      </Grid>
    </Box>

  )
}

export default SignUp