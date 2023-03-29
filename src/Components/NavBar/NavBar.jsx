import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import css from "./NavBar.module.css";

export const NavBar = () => {
  const navItem = [
    { href: "home", text: "Home" },
    { href: "newData", text: "Add your own data" },
    { href: "region", text: "Fishing locations" },
    { href: "fishes", text: "Fish" },
  ];

  return (
    <nav className={css.navBar}>
      {navItem.map(({ href, text }) => (
        <Link to={href} key={href} className={css.link}>
          <span className={css.text}> {text}</span>
        </Link>
      ))}
      <Outlet />
    </nav>
  );
};
