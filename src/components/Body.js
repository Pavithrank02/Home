import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import SignIn from "./../SignIn";
import SignUp from "./../SignUp";
import pic from "./../images/signin.jpg";

const Body = () => {
  const [formType, setFormType] = useState("signIn");

  return (
    <Grid container spacing={12} >
      <Grid
        item
        xs={8}
        display="flex"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h3" >
          Welcome to Website
        </Typography>
        <img className="image-sign" src={pic} alt="image" />
      </Grid>
      <Grid
        item
        xs={4}
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
      >
        {formType === "signIn" ? (
          <SignIn setFormType={setFormType} />
        ) : (
          <SignUp setFormType={setFormType} />
        )}
      </Grid>
    </Grid>
  );
};

export default Body;
