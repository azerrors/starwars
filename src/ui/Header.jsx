import { useStar } from "../contexts/starContext";
import Theme from "./Theme";

function Header() {
  const { username, side } = useStar();

  return (
    <div className="flex justify-between border-b border-cyan-500  bg-cyan-200 py-7  text-sm shadow-lg dark:border-none dark:bg-third  md:text-xl">
      <h2 className="ml-7 font-semibold uppercase tracking-widest text-cyan-600 dark:text-yellow-400 md:ml-24">
        {side ? side : "NOT CHOOSEN"}
      </h2>
      <Theme />
      <p className="mr-5 font-semibold uppercase tracking-widest text-cyan-600 dark:text-yellow-400 md:mr-24">
        {username ? username : "stranger"}
      </p>
    </div>
  );
}

export default Header;
