import React, { useEffect, useState } from "react";
import { useFetch } from "./useFetch";
import { useForm } from "./useForm";

const App = () => {
  const [value, handleChange] = useForm({
    email: "",
    password: "",
    firstName: "",
  });
  const [count, setCount] = useState(JSON.parse(localStorage.getItem("count")));
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
  // https://numbersapi.com/43/trivia
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <div>
      <div>{loading ? "...." : data}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount((c) => c + 1)}>increment</button>
      <br /> <br />
      <>
        {/* <button onClick={() => setShowHello(!showHello)}>Toggle</button>
        {showHello && <Hello />} */}
        <input name="email" value={value.email} onChange={handleChange} />
        <input
          name="firstName"
          value={value.firstName}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          value={value.password}
          onChange={handleChange}
        />
        <div>{value.email}</div>
        <div>{value.password}</div>
      </>
    </div>
  );
};

export default App;
