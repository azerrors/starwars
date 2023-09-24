import { useStar } from "../contexts/starContext";
import { IoMdClose } from "react-icons/io";

import Info from "./Info";
import Logo from "./Logo";
import MainNav from "./MainNav";
// import Theme from "./Theme";
import FavIcon from "./FavIcon";

function Siderbar() {
  const { dispatch } = useStar();

  const handleClick = () => {
    dispatch({ type: "displaySidebar" });
  };

  return (
    <div className="row-start-1 row-end-[-1] border-r border-blue-100 bg-cyan-900 dark:border-none  dark:bg-primary">
      <IoMdClose
        onClick={handleClick}
        className="cursor-pointer text-2xl text-cyan-200 transition-all duration-300 hover:scale-[1.02] dark:text-yellow-200 md:text-3xl"
      />
      <Logo />
      <MainNav />
      <div className="flex justify-around">
        <FavIcon />
      </div>
      <Info />
    </div>
  );
}

export default Siderbar;
