import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import TextField from "@mui/material/TextField";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import "./Styles.css";

function SignIn(props) {
  const initialData = {
    username: "",
    password: ""
  }

  const [data, setData] = useState(initialData);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(true);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const inputHanlder = (event) => {
    const { name, value } = event.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
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

  const formChange = () => {
    const { setFormType } = props;
    setFormType("signup");
  };
  
  const submitButton = (e) => {
    e.preventDefault();
    setError(false);

    const userDetails = localStorage.getItem("formsValues");
    const { username, password } = data;
    if (username === "" && password.length < 5) {
      return;
     } else {
        const userData = JSON.parse(userDetails);
        userData.find((e) => {
          if (e.username === username && e.password === password) {
            setOpen(true);
          } else(console.log("not match"))
        } );
      } 
      setData(initialData);
      setError(true);
    };

  return (
    <Box sx={{ border: 2, mt: 3, borderColor: 'primary.main', borderRadius: '2%', height: '90%' }}>
      <Grid container display="flex" direction="column" justifyContent="center" alignItems="center">
        <Typography variant="h4" marginTop={2} sx={{ fontWeight: 'Bold' }}>
          Login
        </Typography>
        <Typography variant="p" marginTop={1}>
          Add Your Credentials Below..
        </Typography>
        <IconButton className="icon">
          <AccountCircleIcon sx={{ fontSize: 70, color: "#1957DD" }} />
        </IconButton>
        <form className='form-item'>
          <TextField
            margin="none"
            color="primary"
            id="outlined-multiline-flexible"
            label="Username"
            name="username"
            onChange={inputHanlder}
            value={data.username}
            error={error ? "" : !data.username}
          />
          <TextField
            margin="normal"
            id="outlined-multiline-flexible"
            label="Password"
            name="password"
            onChange={inputHanlder}
            value={data.password}
            error={error ? "" : !data.password}
          />
          <Button
            variant="contained"
            size="medium"
            type="submit"
            marginTop={4}
            onClick={submitButton}
          >
            Login
          </Button>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="You Have Successfully Logged In!"
            action={action}
            required
          />

          <Typography variant="p" sx={{ fontWeight: 'medium', textAlign: 'center' }} mt={2}>
            If you are new, <Button justifyContent="center" alignItems="center" onClick={formChange}>SignUp </Button>
          </Typography>
        </form>
        <p>------or Signin Through------</p>
        <div className="log">
          <GoogleIcon sx={{ color: "red" }} />
          <FacebookIcon sx={{ color: "blue" }} />
          <TwitterIcon sx={{ color: "#19A2DD" }} />
        </div>
      </Grid>
    </Box>

  );
}

export default SignIn;
