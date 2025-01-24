import React, { useState } from "react";
import Button from "./Button";

const About = () => {
  const [set, setCount] = useState(0);
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <>
      <h1>{set}</h1>
      <button onClick={() => setCount(set + 1)}>+</button>
      <button onClick={decrement}>-</button>
      <h2>Do you see me</h2>
      <Button name="About us" />
    </>
  );
};

export default About;
