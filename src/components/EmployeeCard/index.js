import React from "react";
import Col from "../Col"
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="row">
      <Col size="2">
        <div className="img-container">
        <img alt={props.name} src={props.image} />
        </div>
      </Col>
      <Col size="1">
        <p>{props.id}</p>
      </Col>
      <div className="content">
        <ul className="infoList">
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul>
      </div>
      <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default EmployeeCard;
