import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [isLogIn, setIsLogin] = useState(true);

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword , setShowPassword] = useState(false)

  const handleToggle = () => {
    // Toggle the value of isLogIn
    setIsLogin(!isLogIn);
  };

  return (
    <>
      <div className="flex flex-col w-80 h-auto p-5 border-slate-300 border items-center gap-5">
        <img src="/instablacklogo.png" className="w-40 snap-center pt-5" />

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
          type= {!showPassword ? "password" : "text"}
          value={inputs.password}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />

        {!isLogIn && (
          <>
            <input
              placeholder="Confirm Password"
              className="text-sm w-64 p-2 rounded-md border border-slate-300 bg-slate-200"
              type="password"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
            <button className="w-64 bg-blue-400 text-white rounded p-2">
              Sign Up
            </button>
          </>
        )}

        {isLogIn && (
          <button className="w-64 bg-blue-400 text-white rounded p-2">
            Log In
          </button>
        )}
        <div className="flex items-center gap-2">
          <hr className="w-12 border-slate-400"></hr>
          <p>Or</p>
          <hr className="w-12 border-slate-400"></hr>
        </div>
        <div className="flex gap-2">
          <img src="/googleLogo.svg" className="w-5 " />
          <p>Sign In with Google</p>
        </div>
      </div>

      <div className="flex w-80 h-20 border border-slate-300 items-center justify-center">
        <p className="text-center">
          {isLogIn ? "Don't have an account?" : "Already have an account?"}
          <span
            className="text-blue-400 cursor-pointer hover:text-blue-700"
            onClick={handleToggle}
          >
            {" "}
            {isLogIn ? "Sign up" : "Log in"}
          </span>
        </p>
      </div>
      <div></div>
    </>
  );
};

export default AuthForm;
