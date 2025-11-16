import React from "react";
import "./HomeStyles.css";
import Records from "../../Components/Records/Records";
import Form from "../../Components/Form/Form";

const Home = () => {
  return (
    <div className="home">
      <Form />
      <Records />
    </div>
  );
};

export default Home;
