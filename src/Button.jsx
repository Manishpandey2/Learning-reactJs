import React from "react";

const Button = (props) => {
  return (
    <>
      <button>{props.name}</button>
    </>
  );
};
Button.defaultProps = {
  name: "Manish",
};
export default Button;
