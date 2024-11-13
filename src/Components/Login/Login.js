import React, { useState } from 'react';
import './login.css'
import keyIllustration from '../../assests/login/keyIllustration.svg';
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { decodeToken} from 'react-jwt'

export default function Login() {
    var [loginData, setLoginData] = useState({});
    const handleChange = (e)=>{
        setLoginData((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value,
        }));
    }
    const navigate = useNavigate();
    const login = async ()=>{
        const response = await axios.post(
          "http://localhost:5000/login",
          loginData
        );
        let decodedData = decodeToken(response.data);
        localStorage.setItem("token",response.data)
        // console.log(decodedData);
        navigate("/");
    }
  return (
    <section id="login">
      <div className="login-container">
        <div className="login__main">
          <TextField
            required
            id="outlined-required"
            label="Username"
            size="medium"
            sx={{ width: "242px", fontSize: "20px" }}
            onChange={handleChange}
            name="username"
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            size="medium"
            autoComplete="current-password"
            sx={{ width: "242px" }}
            onChange={handleChange}
            name="password"
          />
          <a className="login-anchor" href="www.google.com">
            Forgot password
          </a>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Remember me"
          />
          <Button
            variant="contained"
            size="large"
            sx={{ width: "242px" }}
            onClick={login}>
            Log in
          </Button>
          <div className="login-anchor">
            Or <a href="www.google.com">Register Me</a>
          </div>
        </div>
        <div className="login__illusration">
          <img src={keyIllustration} alt="key"></img>
        </div>
      </div>
    </section>
  );
}
