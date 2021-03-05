import React from "react";
import "./style.css";

function TableTitle(props) {
  return <div className="titleRow row">
              {props.children}
        </div>;
}

export default TableTitle;