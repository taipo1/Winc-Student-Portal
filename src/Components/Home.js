import React from "react";
import MainChart from "./Chart";

const Home = (props) => {
  return (
    <div className="home-container">
      <h1>Assignment result overview</h1>
      <MainChart chart={props.chart} />
    </div>
  );
};

export default Home;
