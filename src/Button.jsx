import React from "react";

const Button = ({ name }) => {
  return (
    <>
      <button>{name}</button>
    </>
  );
};
Button.defaultProps = {
  name: "Manish",
};
export default Button;
