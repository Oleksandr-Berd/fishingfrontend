import { Outlet } from "react-router-dom";
import css from "./Buttons.module.css";

export const ButtonContainer = ({ children }) => {
  return (
    <div className={css.btnContainer}>
      {children}
      <Outlet />
    </div>
  );
};
