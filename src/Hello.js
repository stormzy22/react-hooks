import React from "react";

export const Hello = () => {
  React.useEffect(() => {
    console.log("render");
    return () => {
      console.log("unmount");
    };
  }, []);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};
