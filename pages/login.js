import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import Link from "next/link";
import { getAuth , signInWithEmailAndPassword } from "firebase/auth";
import {useRouter} from "next/router";
import { app } from "./config.js"

const login = () => {
  const auth = getAuth();
  const router = useRouter();
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      router.push('/dashbord')
    })
  }

  return (
    <>
    <div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h2>Login</h2>
          <p>Please enter your login email and password!</p>
        </div>

        <form style={{ margin: "auto"}}>
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
            value = {password}
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
              onClick={signIn}
            >
              Login
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
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <p>
              Don't have an account?{" "}
              <Link href="register">
                <a style={{ color: "blue" }}> Sign Up</a>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
      
    </>
  );
};

export default login;
