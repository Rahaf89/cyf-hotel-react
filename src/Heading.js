import React from "react";
import Clock from "./Clock";

const Heading = () => {
  return (
    <div>
      <header className="App-header">
        {" "}
        <img
          src="https://image.flaticon.com/icons/svg/139/139899.svg"
          className="App-logo"
          alt="logo"
        />{" "}
        CYF{" "}
      </header>{" "}
      <Clock />{" "}
    </div>
  );
};

export default Heading;
