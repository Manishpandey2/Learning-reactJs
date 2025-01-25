import React, { useEffect, useState } from "react";
// import Button from "./Button";

const About = () => {
  const [set, setCount] = useState(0);
  const [mul, setMul] = useState(2);

  const multiplication = () => {
    setMul(mul * 2);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  //first type of useEffect hook

  // useEffect(() => {
  //   console.log("Hello this is first type of useEffect hook");
  // }, []);

  // second type of useEffect hook

  useEffect(() => {
    console.log("This is second types of useEffect hook with dependency array");
  }, [set, mul]);

  // Third type of useEffect hook

  useEffect(() => {
    console.log(
      "I am that overconfindent soul who tirggered every moment of event"
    );
  });
  return (
    <>
      <h1>{set}</h1>
      <button onClick={() => setCount(set + 1)}>+</button>
      <button onClick={decrement}>-</button>
      <h2>Do you see me</h2>
      {/* <Button name="About us" /> */}

      <h2>{mul}</h2>
      <button onClick={multiplication}>hit</button>
    </>
  );
};

export default About;
