import { useState } from "react";
const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <>
      <input
        placeholder="Username, Phonenumber, Email"
        className="text-sm w-64 p-2 rounded-md border border-slate-300 bg-slate-200"
        type="email"
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
      <input
        placeholder="Password"
        className="text-sm w-64 p-2 rounded-md border border-slate-300 bg-slate-200"
        type="password"
        value={inputs.password}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
      />
      <button className="w-64 bg-blue-400 text-white rounded p-2">
        Log in
      </button>
    </>
  );
};

export default Login;
