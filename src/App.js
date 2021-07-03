import React, { useCallback, useState } from "react";
import { Hello } from "./Hello";
import Square from "./Square";
const App = () => {
  const [count, setCount] = useState(0);
  const favoriteNums = [7, 21, 37];

  const increment = useCallback(
    (n) => {
      setCount((c) => c + n);
    },
    [setCount]
  );

  return (
    <div>
      <Hello increment={increment} />
      <h1>count: {count}</h1>
      {favoriteNums.map((n) => (
        <Square increment={increment} key={n} n={n} />
      ))}
    </div>
  );
};

export default App;
