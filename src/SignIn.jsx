import React from "react";
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
import "./Styles.css";

function SignIn(props) {
  const formChange = () => {
    const { setFormType } = props;
    setFormType("signup");
  };

  return (
    <Box sx={{ border: 2, mt:3, borderColor: 'primary.main', borderRadius: '2%', height: '90%' }}>
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
          />
          <TextField
            margin="normal"
            id="outlined-multiline-flexible"
            label="Password"
            name="password"
          />
         
          
              <Button
                variant="contained"
                size="medium"
                type="submit"
                marginTop= {4}
              >
                Login
              </Button>
        
  
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
