import React from "react";
import { useState } from "react";

const Login = ({handleLogin}) => {
  // console.log(handleLogin)
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    handleLogin(Email,Password)

    // console.log("email is", Email);
    // console.log("password is", Password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen mx-auto items-center justify-center ">
      <div className="border-2 p-20  bg-linear-to-b from-[#151d1d] via-[#0b1111] to-[#050707] backdrop-blur-xl  border-emerald-400/50 rounded-3xl shadow-[0_40px_120px_rgba(16,185,129,0.28)]">
        <form
          onSubmit={(e) => {
            SubmitHandler(e);
          }}
          className="flex flex-col items-center justify-center  "
        >
          <input
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="border border-emerald-600 rounded-full py-2 text-xl outline-none bg-[#111] px-6"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={Password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="border border-emerald-600 rounded-full py-2 text-xl outline-none bg-[#111] px-6 mt-3"
            type="password"
            placeholder="Enter password"
          />
          <button className=" mt-5 bg-linear-to-b from-emerald-400 via-emerald-500 to-emerald-700 shadow-[0_12px_30px_rgba(16,185,129,0.35)] text-white rounded-full  py-2 w-full font-semibold text-lg px-8  outline-none  ">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
