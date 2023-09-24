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
            className="mr-8 cursor-pointer text-xl  text-cyan-600 hover:text-cyan-400 md:text-3xl"
            onClick={handleSetTheme}
          />
        </>
      ) : (
        <>
          <HiOutlineSun
            className="mr-8 cursor-pointer text-xl text-yellow-400 hover:text-yellow-500 md:text-3xl"
            onClick={handleSetTheme}
          />
        </>
      )}
    </div>
  );
}

export default Theme;
