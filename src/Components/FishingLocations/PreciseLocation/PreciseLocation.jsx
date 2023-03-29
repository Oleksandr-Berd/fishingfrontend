import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BackButton } from "../../../Utilities/Buttons/BackButton";
import { ButtonContainer } from "../../../Utilities/Buttons/ButtonContainer";
import { HomeButton } from "../../../Utilities/Buttons/HomeButton";
import { getLocById } from "../../../Utilities/helpers";
import { FormAddImage } from "../../FormAddImage/FormAddImage";
import { nanoid } from "nanoid";
import css from "./PreciseLocation.module.css";
import { PrecLocImages } from "./PrecLocImages/PrecLocImages";
export const PreciseLocation = () => {
  const { _id, locPath } = useParams();
  const [location, setLocation] = useState("");

  useEffect(() => {
    getLocById(_id, locPath).then(setLocation);
  }, [_id, locPath]);

  const {
    title,
    adress,
    fish,
    description,
    coordinates,
    allowedTime,
    fishingConditions,
    picture,
  } = location;

  // useEffect(() => {
  //   getWeather(coordinates).then(console.log);
  // }, [coordinates]);

  return (
    <div>
      <ButtonContainer>
        <BackButton />
        <HomeButton />
      </ButtonContainer>
      <div className={css.gridContainer}>
        <div className={css.dataContainer}>
          <h1 className={css.title}>{location !== null && title}</h1>
          <p className={css.adress}>Adress: {adress}</p>
          <p className={css.description}>{description}</p>
          <p style={{ fontSize: "20px" }}>
            <span style={{ fontWeight: "800", fontSize: "24px" }}>
              Fishing conditions:{" "}
            </span>{" "}
            {fishingConditions}
          </p>
          <p style={{ fontSize: "20px" }}>
            <span style={{ fontWeight: "800", fontSize: "24px" }}>
              Allowed time for fishing:{" "}
            </span>{" "}
            {allowedTime}
          </p>
          <p style={{ fontWeight: "800", fontSize: "24px" }}>Type of fish:</p>
          <ul className={css.fishList}>
            {fish && fish.map((fish) => <li key={nanoid()}>{fish}</li>)}
          </ul>
        </div>
        {coordinates && (
          <iframe
            title={title}
            src={`https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d20280.311450652876!2d${coordinates.longitude}!3d${coordinates.latitude}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1677849338306!5m2!1suk!2sua`}
            className={css.map}
            loading="lazy"
          ></iframe>
        )}
      </div>

      <ul className={css.imagesList}>
        {picture &&
          picture.map((el) => <PrecLocImages image={el} key={nanoid()} />)}
      </ul>
      <FormAddImage locPath={locPath} id={_id} />
    </div>
  );
};
