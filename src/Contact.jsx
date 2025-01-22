import React from "react";
import Button from "./Button";
import Card from "./Card";

const Contac = () => {
  return (
    <>
      <h1>Hello I am from contact page</h1>
      <Button name="Contact" />

      <Card title="Card titel" paragraph="card paragraph" />
      <Card title="Card 2" paragraph="card 2" />
      <Card />
    </>
  );
};

export default Contac;
