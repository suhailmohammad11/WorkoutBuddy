import React, { useState } from "react";
import "../Login/LoginStyles.css";
import { useSignUp } from "../../Hooks/useSignUp";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const { signup, error } = useSignUp();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password);
    if (!error) {
      setSuccess(true);
      setEmail("");
      setPassword("");
    } else {
      setSuccess(false);
    }
  };
  return (
    <div className="main-form">
      <h1>Sign Up</h1>
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
            <button>Signup</button>

            {error && <p>{error}</p>}
            {success && <p style={{ color: "green" }}>Signup successful!</p>}
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
