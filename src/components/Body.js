import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import SignIn from "./../SignIn";
import SignUp from "./../SignUp";
import pic from "./../images/signin.jpg";

const Body = () => {
  const [formType, setFormType] = useState("signIn"); // dasdasd

  return (
    <Grid container spacing={12}>
      <Grid
        item
        xs={8}
        display="flex"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <h1>Welcome to Website</h1>
        <h4>If new, Click here to SignUp</h4>
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
          <SignUp />
        )}
      </Grid>
    </Grid>
  );
};

export default Body;
