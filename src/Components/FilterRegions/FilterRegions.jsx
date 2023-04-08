import { useState } from "react";
import css from "./FilterRegions.module.css";

const FilterRegions = ({ submit }) => {
  const [query, setQuery] = useState("");


  const handleSubmit = (evt) => {
    evt.preventDefault();
    submit(query)
    setQuery("")
  };

  return (
    <form className={css.formFilterRegion} onSubmit={handleSubmit}>
      <label htmlFor="filterRegions" className={css.labelFilterRegion}>
        Enter the name of a region
        <input
          type="text"
          name="filterRegions"
          className={css.inputFilterRegion}
          onChange={(evt) => {
            setQuery(evt.currentTarget.value)
              
          }}
        />
      </label>
      <button type="submit" className={css.button}> Search</button>
    </form>
  );
};

export default FilterRegions;
