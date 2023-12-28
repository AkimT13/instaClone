import { useState } from "react";
const Signup = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    fullname: "",
    username: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <input
        placeholder="Email"
        className="text-sm w-64 p-2 rounded-md border border-slate-300 bg-slate-200"
        type="email"
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
      <input
        placeholder="Username"
        className="text-sm w-64 p-2 rounded-md border border-slate-300 bg-slate-200"
        type="email"
        value={inputs.username}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
      <input
        placeholder="Fullname"
        className="text-sm w-64 p-2 rounded-md border border-slate-300 bg-slate-200"
        type="email"
        value={inputs.fullName}
        onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
      />



      <input
        placeholder="Password"
        className="text-sm w-64 p-2 rounded-md border border-slate-300 bg-slate-200"
        type={showPassword ? 'password' : 'text'}
        value={inputs.password}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
      />
      
    </>
  );
};

export default Signup;
