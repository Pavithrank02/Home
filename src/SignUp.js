import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./Styles.css";

const initialData = {
  username: "",
  email: "",
  address: "",
  password: "",
};

const errorObj = {
  username: false,
  email: false,
  address: false,
  password: false,
};

function SignUp(props) {
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState(errorObj);
  const inputHanlder = (event) => {
    const { name, value } = event.target;
    setData(() => {
      return {
        ...data,
        [name]: value,
      };
    });
  };
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const storeData = () => {
    let names = JSON.parse(localStorage.getItem("formsValues")) || [];
    let newArr = [...names, data];
    localStorage.setItem("formsValues", JSON.stringify(newArr));
  };
  const formChange = () => {
    const { setFormType } = props;
    setFormType("signIn");
  };
  const action = (
    <React.Fragment>
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
  const cloneErrors = JSON.parse(JSON.stringify(errors));
  const handleValidation = (data) => {
    let mockObj = cloneErrors;
    const usernameV = "^[A-Za-z]{4,15}$"
    const passw=  /^(?=.*[0-9]){6,16}$/;
    const emailV = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    const { username, email, address, password } = data;

    console.log("first",mockObj)

    if (username !== usernameV) {
      mockObj.username = true;
    }
    if (email !== emailV) {
      mockObj.email = true;
    }
    if (address==="") {
      mockObj.address = true;
    }
    if (password !== passw) {
      mockObj.password = true;
    }

    return mockObj;
  };

  const submitForm = (e) => {
    e.preventDefault();

    // console.log(props.error);

    let validationErrors = handleValidation(data);

    console.log("second",validationErrors);

    // validationErrors = {
    //   username: true,
    //   email: true,
    //   address: true,
    //   password: true,
    // };
if(!validationErrors)
     {
      storeData();
      setOpen(true);
      setData(initialData);
      
    }
    setErrors(validationErrors);
  };

  return (
    <Box
      sx={{
        border: 2,
        mt: 3,
        borderColor: "primary.main",
        borderRadius: "2%",
        height: "95%",
        width: "70%",
      }}
    >
      <Grid
        container
        display="flex"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h4" marginTop={2} sx={{ fontWeight: "Bold" }}>
          SignUp
        </Typography>
        <IconButton className="icon">
          <AccountCircleIcon sx={{ fontSize: 70, color: "#1957DD" }} />
        </IconButton>
        <form className="form-item" noValidate autoComplete="off">
          <TextField
            label="Username"
            margin="dense"
            color="primary"
            name="username"
            required={true}
            onChange={inputHanlder}
            value={data.username}
            error={errors.username}
            helperText={errors.username && "Field should not be empty"}
          />

          <TextField
            label="Email"
            margin="dense"
            color="primary"
            name="email"
            onChange={inputHanlder}
            value={data.email}
            required={true}
            error={errors.email}
            helperText={errors.email && "Field should include @"}
          />
          <TextField
            label="Address"
            margin="dense"
            color="primary"
            name="address"
            onChange={inputHanlder}
            value={data.address}
            required={true}
            error={errors.address}
            helperText={errors.address && "Field should not be empty"}
          />
          <TextField
            label="Password"
            margin="dense"
            color="primary"
            name="password"
            onChange={inputHanlder}
            value={data.password}
            error={errors.password}
            helperText={
              !data.password.length < 5
                ? "Password should be greater than 5"
                : ""
            }
          />
          <Button variant="contained" size="medium" onClick={submitForm}>
            Submit
          </Button>
        </form>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="User Account Created Successfully!"
          action={action}
          required
        />
        <Typography variant="p">
          Already Existing User, <Button onClick={formChange}>SignIn </Button>
        </Typography>
      </Grid>
    </Box>
  );
}

export default SignUp;