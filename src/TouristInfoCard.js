import React from "react";

const TouristInfoCard = props => {
  return (
    <div className="card mb-3">
      <div className="card">
        <img src={props.pic} className="card-img-top" alt="{props.Name}" />
        <div className="card-body">
          <h5 className="card-title">{props.Name}</h5>
          <p>{props.text}</p>
          <a href={props.link} className="btn btn-primary">
            {props.Name}
          </a>
        </div>
      </div>
    </div>
  );
};
export default TouristInfoCard;
