import React from "react";

export const Hello = React.memo(({ increment }) => {
  return <button onClick={() => increment(5)}>++</button>;
});

//React.memo only renders when the prop has changed
