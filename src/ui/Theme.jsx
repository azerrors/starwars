import React, { useEffect, useState } from "react";
import { HiOutlineMoon } from "react-icons/hi";
import { HiOutlineSun } from "react-icons/hi";

function Theme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  const handleSetTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="text-center">
      {theme !== "dark" ? (
        <>
          <HiOutlineMoon
            className="mt-24 cursor-pointer  text-3xl text-cyan-600 hover:text-cyan-400"
            onClick={handleSetTheme}
          />
        </>
      ) : (
        <>
          <HiOutlineSun
            className="mt-24 cursor-pointer text-3xl text-yellow-400 hover:text-yellow-500"
            onClick={handleSetTheme}
          />
        </>
      )}
    </div>
  );
}

export default Theme;
