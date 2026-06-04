import React from "react";
import { useState } from "react";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log("email is", Email);
    console.log("password is", Password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center ">
      <div className="border-2 p-20 rounded-xl border-emerald-600">
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
            className="border-2 border-emerald-600 rounded-full py-2 text-xl outline-none bg-transparent px-6"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={Password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="border-2 border-emerald-600 rounded-full py-2 text-xl outline-none bg-transparent px-6 mt-3"
            type="password"
            placeholder="Enter password"
          />
          <button className=" mt-5 bg-emerald-600 rounded-full py-2 w-full font-semibold text-lg px-8  outline-none  ">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
