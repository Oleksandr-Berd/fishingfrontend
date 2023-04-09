import { useState } from "react";
import { postNewImage } from "../../Utilities/helpers";
import css from "./FormAddImage.module.css";

export const FormAddImage = ({ locPath, id }) => {

  const [files, setFiles]= useState([])

  const handleImageChange = (evt) => {
    const files = evt.target.files;
    const formData = new FormData();
    // formData.append("image", evt.target.image.files[0]);
    for (let i = 0; i < files.length; i++) {
      formData.append("images", files[i]);
    }
    setFiles(formData);
    
  };

  const handleImageSubmit = (evt) => {
    evt.preventDefault()
     postNewImage(files, locPath, id);
  }

  return (
    <form className={css.form} onSubmit={handleImageSubmit}>
      <input
        className={css.input}
        multiple
        type="file"
        name="images"
        onChange={handleImageChange}
      />
      <button className={css.btn} type="submit">
        Upload
      </button>
    </form>
  );
};
