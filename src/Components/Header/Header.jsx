import NavBar from "../NavBar/NavBar";
import css from "./Header.module.css";

const Header = ({ children }) => {
  return (
    <>
      <header className={css.header}>{children}</header>
      <NavBar />
    </>
  );
};

export default Header;
