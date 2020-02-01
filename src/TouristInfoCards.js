import React from "react";

const TouristInfoCards = props => {
  return (
    <div className="card">
      <img src={props.img} className="card-img-top" />
      <div className="card-body">
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCards;