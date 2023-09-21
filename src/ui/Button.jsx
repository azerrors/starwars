import { Link, useNavigate } from "react-router-dom";

function Button({ type = "nav", onClick, category, children }) {
  const navigate = useNavigate();
  const styles = {
    prev: "rounded-lg border border-cyan-400 font-semibold dark:hover:bg-yellow-400 dark:border-yellow-400 px-2 py-1 text-cyan-500 dark:text-white hover:text-white uppercase tracking-wider  text-white transition-all duration-300 hover:bg-cyan-500",
    next: "rounded-lg border border-cyan-400  font-semibold dark:hover:bg-yellow-400 dark:border-yellow-400 px-2 py-1 text-cyan-500 dark:text-white hover:text-white  uppercase tracking-wider text-white transition-all duration-300 hover:bg-cyan-500",
    nav: "rounded-lg border border-cyan-400   font-semibold dark:hover:bg-yellow-400 dark:border-yellow-400 md:px-4 md:py-3 px-2 py-3 text-cyan-500 dark:text-white hover:text-white  uppercase tracking-wider text-white transition-all duration-300 hover:bg-cyan-500",
  };

  if (onClick)
    return (
      <button onClick={onClick} className={styles[type]}>
        {children}
      </button>
    );

  if (category === "navigate")
    return (
      <Link onClick={() => navigate(-1)} className={styles[type]}>
        <button>{children}</button>
      </Link>
    );

  return <button className={styles[type]}>{children}</button>;
}
export default Button;
