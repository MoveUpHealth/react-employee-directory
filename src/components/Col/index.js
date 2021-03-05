import React from "react";

function Col(props) {
  const size = "col-lg-" + props.size

  return (
    <div className={size} >
      {props.children}
    </div>
  );
}

export default Col;