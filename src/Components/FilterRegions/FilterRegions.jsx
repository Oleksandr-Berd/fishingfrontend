import css from "./FilterRegions.module.css"

const FilterRegions = () => {
  return (
    <form className={css.formFilterRegion}>
          <label htmlFor="filterRegions" className={css.labelFilterRegion}>
              Enter the name of a region
              <input type="text" name="filterRegions" className={css.inputFilterRegion } />
      </label>
    </form>
  );
};

export default FilterRegions;
