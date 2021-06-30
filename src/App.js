import React, { useEffect, useRef, useState } from "react";
import { Hello } from "./Hello";
import { useFetch } from "./useFetch";
import { useForm } from "./useForm";

const App = () => {
  const [value, handleChange] = useForm({
    email: "",
    password: "",
    firstName: "",
  });

  const inputRef = useRef();
  const hello = useRef(() => {
    console.log("hello");
  });

  const [showHello, setShowHello] = useState(!false);

  return (
    <div>
      <>
        <button onClick={() => setShowHello(!showHello)}>Toggle</button>
        {showHello && <Hello />}
        <input
          ref={inputRef}
          name="email"
          value={value.email}
          onChange={handleChange}
        />
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
        <button
          onClick={() => {
            inputRef.current.focus();
            hello.current();
          }}
        >
          focus
        </button>
        <div>{value.email}</div>
        <div>{value.password}</div>
      </>
    </div>
  );
};

export default App;
