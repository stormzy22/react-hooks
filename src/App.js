import React, { useRef, useState } from "react";
import { Hello } from "./Hello";
import { useForm } from "./useForm";
import { useMeasure } from "./useMeasure";

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

  const [rect, inputRef2] = useMeasure([value.firstName]);
  console.log(rect);

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
          ref={inputRef2}
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
