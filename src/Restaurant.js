import React from "react";
import Order from "./Order.js";
class Restaurant extends React.Component {
  render() {
    return (
      <div>
        {" "}
        <h3> Restaurant Orders </h3>{" "}
        <ul>
          {" "}
          <Order orderType="pizzas" /> <Order orderType="Saladas" />{" "}
        </ul>{" "}
      </div>
    );
  }
}

export default Restaurant;
