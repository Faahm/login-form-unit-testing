import React, { useState } from "react";
import TextInput from "./TextInput";
import Button from "./Button";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (username === "root" && password === "root") {
      alert("Login successful");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div className="container" data-testid="login-form">
      <h1>Login Form</h1>
      <TextInput
        label="Username:"
        value={username}
        onChange={handleUsernameChange}
        placeholder="Enter username"
      />
      <TextInput
        label="Password:"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter password"
      />
      <Button disabled={!username || !password} onClick={handleLogin} />
    </div>
  );
};

export default LoginForm;
