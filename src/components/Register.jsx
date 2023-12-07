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
    <div className="flex flex-col md:flex-row justify-between items-center">
      <img
        src="src/assets/hero.png"
        alt="register"
        className="hidden md:block w-full md:w-1/2 max-w-md mx-auto my-4"
      />
      <div className="p-4 md:p-0 mx-4 md:mx-28 w-full max-w-lg">
        <img src="src/assets/logo.png" alt="logo" className="w-32 mx-auto" />
        <h1 className="text-xl font-semibold text-center">Welcome</h1>
        <p className="my-8 text-gray-500 text-center">
          Register below to create your account
        </p>
        <form onSubmit={handleRegsiter} className="space-y-4">
          <div>
            <label htmlFor="email" className="text-sm font-semibold">
              Username
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Jane Doe"
              className="mt-1 w-full p-2 border border-gray-300 rounded"
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
              placeholder="********"
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
              placeholder="********"
              className="mt-1 w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <Link to="/dashboard">
            <button
              type="submit"
              className="bg-sky-600 hover:bg-sky-900 text-white font-semibold py-2 px-4 rounded w-full mt-4"
            >
              Register
            </button>
          </Link>
        </form>
        <div className="text-center mt-10">
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
