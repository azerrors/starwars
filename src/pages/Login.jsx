import React, { useState } from "react";
import { useStar } from "../contexts/starContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [side, setSide] = useState("dark-side");

  const navigate = useNavigate();
  const { dispatch } = useStar();

  function handleSubmit(e) {
    e.preventDefault();

    navigate("/home");
    dispatch({ type: "getInfo", payload: { username, side } });
  }

  return (
    <div className=" loginBG flex h-screen  items-center justify-center  bg-cover  bg-center bg-no-repeat md:justify-start ">
      <form
        onSubmit={handleSubmit}
        className="md:min-w-96  flex flex-col items-center justify-center space-x-3  border border-gray-800 bg-transparent p-10 shadow-lg md:ml-24 "
      >
        <div className="flex flex-col items-center   justify-center gap-8 md:flex-row">
          <div className="item-center flex flex-col">
            <label className="font mb-3 font-semibold  uppercase tracking-widest text-white">
              What is your name
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              autoFocus
              className="mb-5 rounded-md border-none px-1 transition-all duration-300 focus:outline-none focus:ring focus:ring-stone-300 md:h-7  md:w-56"
            />
          </div>
          <div className="flex flex-col">
            <label className="font mb-3 font-semibold  uppercase tracking-widest text-white">
              Choose you path
            </label>
            <select
              value={side}
              className="mb-5 w-56 rounded-md border-none px-1 py-1 font-semibold uppercase transition-all duration-300 focus:outline-none focus:ring  focus:ring-stone-300"
              onChange={(e) => setSide(e.target.value)}
            >
              <option value="dark-side">Dark-Side</option>
              <option value="light-side">Light-Side</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="transition-color w-56 rounded-lg border border-stone-400 p-2 text-center font-semibold uppercase text-stone-600 shadow-md duration-300  hover:border-gray-200 hover:text-stone-100 md:h-12"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
