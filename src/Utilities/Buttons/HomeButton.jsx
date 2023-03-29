import { HomeIcon } from "@heroicons/react/24/solid";
import css from "./Buttons.module.css";
import { Link } from "react-router-dom";

export const HomeButton = () => {
  return (
    <button className={css.button}>
      <Link to="/" className={css.buttonLink}>
        <span className={css.btnLinkText}>Go home</span>
      </Link>
      <HomeIcon width={18} />
    </button>
  );
};
