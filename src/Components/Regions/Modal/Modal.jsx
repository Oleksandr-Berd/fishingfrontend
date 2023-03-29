import { useEffect } from "react";
import css from "./Modal.module.css";

export const Modal = ({ onClose, imageUrl, title }) => {
  const handleBackdropClick = (evt) => {
    if (evt.target !== evt.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", (evt) => {
      if (evt.code === "Escape") {
        onClose();
      }
    });
  });
  return (
    <div className={css.overlay} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <img className={css.image} src={`${imageUrl}`} alt={title} />
        <h1>{title}</h1>
      </div>
    </div>
  );
};
