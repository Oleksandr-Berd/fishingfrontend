import { useState } from "react";
import { BackButton } from "../../Utilities/Buttons/BackButton";
import { ButtonContainer } from "../../Utilities/Buttons/ButtonContainer";
import { HomeButton } from "../../Utilities/Buttons/HomeButton";
import css from "./NewData.module.css";

const NewData = ({ submit }) => {
  const [title, setTitle] = useState("");
  const [{ latitude, longitude }, setCoordinates] = useState({});
  const [adress, setAdress] = useState("");
  const [fish, setFish] = useState([]);
  const [fishingConditions, setFishingConditions] = useState("");
  const [description, setDescription] = useState("");
  const [allowedTime, setAllowedTime] = useState("");

  const [locPath, setLocPath] = useState("");
  const coordinates = { latitude, longitude };
  const submitHandler = (evt) => {
    evt.preventDefault();
    submit(
      {
        title,
        coordinates,
        adress,
        fish,
        fishingConditions,
        description,
        allowedTime,
      },
      locPath
    );
    setTitle("");
    setCoordinates({});
    setAdress("");
    setFish([]);
    setFishingConditions("");
    setDescription("");
    setAllowedTime("");
    setLocPath("");
    window.location.reload();

  };

  return (
    <div>
      <ButtonContainer>
        <BackButton />
        <HomeButton />
      </ButtonContainer>
      <form
        className={css.form}
        method="post"
        id="form"
        encType="multipart/form-data"
        onSubmit={submitHandler}
      >
        <label className={css.label} htmlFor="region">
          Choose your region
        </label>
        <input
          className={css.input}
          list="regions"
          name="region"
          id="region"
          onChange={(evt) => {
            setLocPath(evt.currentTarget.value);
          }}
          
        />
        <datalist className={css.datalist} id="regions">
          <option value="Cherkasy">Cherkasy region</option>
          <option value="Chernihiv">Chernihiv region</option>
          <option value="Chernivtsi">Chernivtsi region</option>
          <option value="Crimea">Crimea region</option>
          <option value="Dnipro">Dnipro region</option>
          <option value="Donetsk">Donetsk region</option>
          <option value="Frankivsk">Frankivsk region</option>
          <option value="Kharkiv">Kharkiv region</option>
          <option value="Kherson">Kherson region</option>
          <option value="Khmelnytsk">Khmelnytsk region</option>
          <option value="Kropyvnytskyi">Kropyvnytskyi region</option>
          <option value="Kyiv">Kyiv region</option>
          <option value="Luhansk">Luhansk region</option>
          <option value="Lviv">Lviv region</option>
          <option value="Mykolaiv">Mykolaiv region</option>
          <option value="Odesa">Odesa region</option>
          <option value="Poltava">Poltava region</option>
          <option value="Rivne">Rivne region</option>
          <option value="Sumy">Sumy region</option>
          <option value="Ternopil">Ternopil region</option>
          <option value="Vinnytsia">Vinnytsia region</option>
          <option value="Volyn">Volyn region</option>
          <option value="Zakarpatia">Zakarpatia region</option>
          <option value="Zaporizhia">Zaporizhia region</option>
          <option value="Zhytomyr">Zhytomyr region</option>
        </datalist>
        <label className={css.label} htmlFor="title">
          Enter the title
        </label>
        <input
          className={css.input}
          type="text"
          name="title"
          onChange={(evt) => {
            setTitle(evt.currentTarget.value);
          }}
          value={title}
          placeholder="e.g. New Title"
          id="title"
        />
        <label className={css.label}>Enter the coordinates</label>
        <input
          className={css.input}
          name="latitude"
          onChange={(evt) => {
            setCoordinates({ latitude: evt.currentTarget.value });
          }}
          placeholder="latitude e.g. 50.50505"
        />
        <input
          className={css.input}
          name="longitude"
          onChange={(evt) => {
            setCoordinates({ latitude, longitude: evt.currentTarget.value });
          }}
          placeholder="longitude e.g. 30.30303"
        />
        <label className={css.label} htmlFor="adress">
          Enter the adress
        </label>
        <input
          className={css.input}
          type="text"
          name="adress"
          onChange={(evt) => {
            setAdress(evt.currentTarget.value);
          }}
          value={adress}
          placeholder="e.g. Road to Heaven"
          id="adress"
        />
        <label className={css.label} htmlFor="fish">
          Enter the fish
        </label>
        <input
          className={css.input}
          type="text"
          name="fish"
          onChange={(evt) => {
            setFish(evt.currentTarget.value.split(","));
          }}
          value={fish}
          placeholder="e.g. fish1, fish2"
          id="fish"
        />
        <label className={css.label} htmlFor="fishingConditions">
          Enter the fishing conditions
        </label>
        <input
          className={css.input}
          type="text"
          name="fishingConditions"
          onChange={(evt) => {
            setFishingConditions(evt.currentTarget.value);
          }}
          value={fishingConditions}
          placeholder="e.g. Everything great"
          id="fishingConditions"
        />
        <label className={css.label} htmlFor="description">
          Enter the description
        </label>
        <textarea
          className={css.textarea}
          type="text"
          name="description"
          onChange={(evt) => {
            setDescription(evt.currentTarget.value);
          }}
          value={description}
          placeholder="e.g. Very interesting location"
          id="description"
          rows="8"
        />
        <label className={css.label} htmlFor="allowedTime">
          Enter the allowed time
        </label>
        <input
          className={css.input}
          type="text"
          name="allowedTime"
          onChange={(evt) => {
            setAllowedTime(evt.currentTarget.value);
          }}
          value={allowedTime}
          placeholder="e.g. Whenever you want"
          id="allowedTime"
        />
        <button type="submit" className={css.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewData;
