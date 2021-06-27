import React from "react";

export const Hello = () => {
  const renders = React.useRef(0);

  console.log("hello renders: ", renders.current++);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};
