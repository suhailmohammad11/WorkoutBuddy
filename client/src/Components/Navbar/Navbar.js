import React from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import { useLogout } from "../../Hooks/useLogout";
import { useAuthContext } from "../../Hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const {user} = useAuthContext();  
  const handleClick = () => {
    logout();
  };
  return (
    <nav>
      <Link to="/">
        <h1>WorkoutBuddy</h1>
      </Link>
      {user && (
       
      <div className="logout">
         <span>{user.email}</span> {"  "}
        <button onClick={handleClick}>Logout</button>
      </div>  )}
      {!user && (
      <div className="auth">
        <Link to="/signup">SignUp</Link>
        <Link to="/login">Login</Link>
      </div> )}
    </nav>
  );
};

export default Navbar;
