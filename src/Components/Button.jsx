import React from "react";

export const Button = React.memo((props) => {
  console.log("it re rendered ");

  return (
    <div>
      <button onClick={props.handleClick}>{props.buttonName}</button>
    </div>
  );
});

// react.memo
// it will only be re rendered when my props change 
// but if we send function it will rerender 
