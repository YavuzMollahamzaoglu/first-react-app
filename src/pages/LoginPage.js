import React, { useState } from "react";
import { Button, TextField, Alert } from "@mui/material";

function LoginPage() {
  const [userName, setUserName] = useState("ılkDeger");
  const [password, setPassword] = useState("");
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [error, setError] = useState(false);

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginClick = () => {
    if (userName && password) {
      console.log(`Welcome, ${userName} ${password}`);
      setIsUserLoggedIn(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  // render
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          marginTop: 48,
        }}
      >
        <TextField
          id="outlined-basic"
          label="User Name"
          variant="outlined"
          onChange={handleUserNameChange}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          onChange={handlePasswordChange}
          onClick={() => {
            console.log("Password Clicked");
          }}
        />
        <Button onClick={handleLoginClick} variant="contained">
          Login
        </Button>
        {isUserLoggedIn && "You are logged ın"}
      </div>
      {isUserLoggedIn && `Welcome, ${userName}`}
      {error && (
        <Alert
          onClick={() => {
            console.log("Alert Clicked");
          }}
          everity="error"
        >
          Kardeş Username ve Password girsene!!!!
        </Alert>
      )}
    </div>
  );
}

export default LoginPage;
