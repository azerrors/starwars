import { useStar } from "../contexts/starContext";

function Header() {
  const { username, side } = useStar();
  
  return (
    <div className="flex justify-between text-sm md:text-xl  border-b border-cyan-500  bg-cyan-200 py-7 shadow-lg dark:border-none  dark:bg-third">
      <h2 className="md:ml-24 ml-7 font-semibold uppercase tracking-widest text-cyan-600 dark:text-yellow-400">
        {side ? side : "NOT CHOOSEN"}
      </h2>
      <p className="md:mr-24 mr-5 font-semibold uppercase tracking-widest text-cyan-600 dark:text-yellow-400">
        {username ? username : "stranger"}
      </p>
    </div>
  );
}

export default Header;
