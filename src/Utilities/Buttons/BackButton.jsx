import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import css from "./Buttons.module.css";

export const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate(-1);
      }}
      className={css.button}
    >
      <span className={css.btnLinkText}>Go back</span>
      <ArrowUturnLeftIcon width={18} />
    </button>
  );
};
