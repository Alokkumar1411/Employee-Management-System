import React from "react";
import { useState } from "react";

const Login = ({ handleLogin }) => {
  // console.log(handleLogin)
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    handleLogin(Email, Password);

    // console.log("email is", Email);
    // console.log("password is", Password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen mx-auto items-center justify-center ">
      <div className="border-2 p-10  bg-linear-to-b from-[#151d1d] via-[#0b1111] to-[#050707] backdrop-blur-xl  border-emerald-400/50 rounded-3xl shadow-[0_40px_120px_rgba(16,185,129,0.28)]">
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
            className="border placeholder:text-gray-400 text-gray-200 border-emerald-600 rounded-full py-2 text-xl outline-none bg-[#111] px-10"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={Password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="border placeholder:text-gray-400 text-gray-200 border-emerald-600 rounded-full py-2 text-xl outline-none bg-[#111] px-10 mt-3"
            type="password"
            placeholder="Enter password"
          />
          <button className=" mt-5 mb-5 bg-linear-to-b from-emerald-400 via-emerald-500 to-emerald-700 shadow-[0_12px_30px_rgba(16,185,129,0.35)] text-white rounded-full  py-2 w-full font-semibold text-lg px-8  outline-none  ">
            Log in
          </button>
        </form>
        <div className="mt-6 border-t border-emerald-500/30 pt-5">
          <h3 className="text-center text-xl  font-normal mb-3">
            <span className="text-emerald-600" > Demo Credentials</span>
          </h3>

          <div className="bg-black/20 border border-emerald-500/30 rounded-xl p-5 text-sm">
            <div className="mb-3">
              <p className="text-emerald-400 text-lg font-normal mb-1">Admin</p>
              <p className="text-gray-400">Email:  <span className="text-emerald-400" >admin@me.com</span></p>
              <p className="text-gray-400">Password: <span className="text-emerald-400" >123</span> </p>
            </div>

            <div className="border-t border-emerald-500/20 pt-3">
              <p className="text-emerald-400 text-lg font-normal mb-1">Employees</p>

              <p className="text-gray-400 pb-1">employee1@example.com / 123</p>

              <p className="text-gray-400 pb-1">employee2@example.com / 123</p>

              <p className="text-gray-400 pb-1">employee3@example.com / 123</p>

              <p className=" mb-3 text-gray-400">employee4@example.com / 123</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
