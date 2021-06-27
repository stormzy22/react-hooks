import React from "react";
import { useForm } from "./useForm";

const App = () => {
  const [value, handleChange] = useForm({ email: "", password: "" });

  return (
    <div>
      <input name="email" value={value.email} onChange={handleChange} />
      <br />
      <input
        type="password"
        name="password"
        value={value.password}
        onChange={handleChange}
      />
      <div>{value.email}</div>
      <div>{value.password}</div>
    </div>
  );
};

export default App;
