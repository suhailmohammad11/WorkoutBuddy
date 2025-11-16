import React, { useState } from "react";
import "../Login/LoginStyles.css";
import { useLogin } from "../../Hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const { login, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(email, password);
    setSuccess(result);
    if (result) {
      setEmail("");
      setPassword("");
    }
  };
  return (
    <div className="main-form">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-elements">
          <label>Email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className="btn">
            <button>Login</button>
            {error && <p>{error}</p>}
            {success && (
              <p style={{ color: "green" }}> You are Logged in..!!</p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
