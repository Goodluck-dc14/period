import React from "react";
import Header from "../Header/Header";
import BodyHolder from "../Homes/BodyHolder";
import MainBody from "../Homes/MainBody";

// import HomeScreen from "../Homes/HomeScreen";

const Structure = () => {
  return (
    <div>
      <Header clr={change ? "#1D8CF8" : "#171941"} />
      {/* <HomeScreen /> */}
      <BodyHolder />
      <MainBody />
    </div>
  );
};

export default Structure;
