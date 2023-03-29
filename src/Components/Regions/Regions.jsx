import { Link, useLocation } from "react-router-dom";
import css from "./Regions.module.css";
import { useState } from "react";
import { Modal } from "./Modal/Modal";

export const Regions = ({ id, name, locPath, image }) => {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = (evt) => setShowModal(!showModal);
  return (
    <li key={id} className={css.container}>
      <img
        src={`${image[0]}`}
        alt=""
        className={css.image}
        onClick={toggleModal}
      />
      {showModal && (
        <Modal onClose={toggleModal} imageUrl={image[0]} title={name} />
      )}
      <Link
        key={id}
        to={`/region/${locPath}`}
        state={{ from: location }}
        className={css.link}
      >
        <h1 className={css.regionsItem}> {name}</h1>
      </Link>
    </li>
  );
};
