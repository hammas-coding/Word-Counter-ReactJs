import React from "react";

const Alert = (props) => {
  const capitalize = (word) => {
    const upper = word.charAt(0).toUpperCase() + word.slice(1);
    return upper;
  };
  return (
    <div style={{ height: "50px" }}>
      {// if props.alert != null show div or do this
      props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(props.alert.type)} </strong>: {props.alert.msg}
        </div>
      )}{" "}
    </div>
  );
};

export default Alert;
