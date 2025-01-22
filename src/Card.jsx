import React from "react";

const Card = (props) => {
  const { title, paragraph } = props;
  return (
    <>
      <h1>{title}</h1>
      <p>{paragraph}</p>
    </>
  );
};
Card.defaultProps = {
  title: "Default title",
  paragraph: "Default paragraph",
};

export default Card;
