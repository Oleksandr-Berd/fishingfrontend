import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import css from "./NavBar.module.css";
import { useAuth } from "../../Utilities/Hooks/useAuth";

const NavBar = () => {
  const navItem = [
    { href: "newData", text: "Add your own data" },
    { href: "region", text: "Fishing locations" },
    { href: "fishes", text: "Fish" },
  ];
  const { isLoggedIn } = useAuth();



  return (
    <nav className={css.navBar}>
      <NavLink className={css.link} to="/">
        <span className={css.text}> Home</span>
        
      </NavLink>
      {isLoggedIn && navItem.map(({ href, text }) => (
        <NavLink to={href} key={href} className={css.link}>
          <span className={css.text}> {text}</span>
        </NavLink>
      ))}
      <Outlet />
    </nav>
  );
};

export default NavBar;
