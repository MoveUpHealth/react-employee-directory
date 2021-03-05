import React from "react";
import Col from "../Col"
import "./style.css";

function EmployeeRow(props) {
  return (
    <div className=" employeeRow row">
      <Col size="2">
        <div className="img-container">
        <img alt={props.name} src={props.image} />
        </div>
      </Col>
      <Col size="1">
        <p className="info">{props.id}</p>
      </Col>
      <Col size="2">
        <p className="info">{props.name}</p>
      </Col>
      <Col size="2">
        <p className="info">{props.role}</p>
      </Col>
      <Col size="2">
        <p className="info">{props.department}</p>
      </Col>
      <Col size="2">
        <p className="info">{props.email}</p>
      </Col>
      <Col size="1">
        <p className="info">{props.extension}</p>
      </Col>
      
    </div>
  );
}

export default EmployeeRow;
