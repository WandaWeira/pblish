import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegsiter = (e) => {
    e.preventDefault();
    // Handle the login logic here
    console.log(email, password);
  };
  return (
    <div className="flex justify-between">
      <img src="src/assets/hero.png" alt="login" className="w-1/2 ml-60" />
      <div className="mx-28 w-full">
        <img src="src\assets\logo.png" alt="logo" className="w-32" />
        <h1 className=" text-xl font-semibold">Welcome</h1>
        <p className="my-8 text-gray-500">
          Register below to create your account
        </p>
        <form onSubmit={handleRegsiter} className="space-y-4 w-1/2">
          <div>
            <label htmlFor="email" className="text-sm font-semibold">
              Username
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full p-2 border border-gray-300 rounded"
              placeholder=""
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full p-2 border border-gray-300 rounded"
              placeholder="test@gmail.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-semibold">
              Confirm password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-sky-600 hover:bg-sky-900 text-white font-semibold py-2 px-4 rounded w-full"
          >
            Register
          </button>
        </form>
        <div className="items-center mt-10">
          <span className="text-gray-400">Have an account?</span>{" "}
          <Link to="/login" className="text-sm text-blue-600 hover:underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
