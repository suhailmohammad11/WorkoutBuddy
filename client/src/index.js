
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {WorkoutContextProvider} from "./Context/WorkoutContext";
import { AuthContextProvider } from "./Context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
  <WorkoutContextProvider>
    <App />
  </WorkoutContextProvider>
  </AuthContextProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
