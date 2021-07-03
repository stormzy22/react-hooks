import React, { useCallback, useMemo, useState } from "react";
import { useFetch } from "./useFetch";

const App = () => {
  const [count, setCount] = useState(0);

  const { data } = useFetch(
    "https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json"
  );

  const computeLongestWord = useCallback((arr) => {
    if (!arr) return [];
    let longestWord = "";
    console.log("computing longest word");
    JSON.parse(arr)?.forEach((sentence) =>
      sentence.split(" ").forEach((word) => {
        if (word.length > longestWord.length) {
          longestWord = word;
        }
      })
    );
    return longestWord;
  }, []);

  const longestWord = useMemo(
    () => computeLongestWord(data),
    [data, computeLongestWord]
  );
  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>increment</button>
      <div>{longestWord}</div>
    </div>
  );
};

export default App;
