import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { getAuth, createUserWithEmailAndPassword,  } from "firebase/auth"
import { app } from "./config.js"
import {useRouter} from "next/router"



const register = () => {
  const auth = getAuth();
  const router = useRouter();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  // const user = firebase.auth().currentUser;

  // if (user) {
  //   router.push('/dashbord')
  // }
  // else{
  //   console.log("error");
  // }
  
  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      router.push("/dashbord")
    })
  }
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",

        }}
      >
        <div style={{ textAlign: "center" }}>
          <h2>Register</h2>
          <p>Please enter your register email and password !</p>
        </div>

        <form style={{ margin: "auto" }} onSubmit={(e) => handleSubmit(e)}>


          <TextField
            fullWidth
            label="Email"
            id="fullWidth"
            type="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            style={{ marginTop: "20px" }}
            autoComplete="off"
          />
          <TextField
            fullWidth
            label="Password"
            id="fullWidth"
            type="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            style={{ marginTop: "20px" }}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Button
              variant="contained"
              style={{ backgroundColor: "#f14d54", width: "100px" }}
              onClick={signUp}
            >
              Register
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "20px",
              justifyContent: "center",
            }}
          >
            <FacebookIcon style={{ color: "blue" }} />
            <GoogleIcon style={{ marginLeft: "20px", color: "blue" }} />
          </div>
        </form>
      </div>
    </>
  );
};

export default register;
