import { useStar } from "../contexts/starContext";
import { RiMoreFill } from "react-icons/ri";

function ResponSiderbar() {
  const { dispatch } = useStar();

  const handleClick = () => {
    dispatch({ type: "displaySidebar" });
  };
  
  return (
    <div className="row-start-1 row-end-[-1] border-r border-blue-100 bg-cyan-900  p-2 transition-all duration-300 dark:border-none dark:bg-primary  md:p-0">
      <RiMoreFill
        onClick={handleClick}
        className="cursor-pointer text-2xl text-cyan-200 transition-all duration-300 hover:scale-[1.02] dark:text-yellow-200 md:text-3xl"
      />
    </div>
  );
}

export default ResponSiderbar;
