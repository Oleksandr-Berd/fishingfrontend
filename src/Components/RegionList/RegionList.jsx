import { useState, useEffect } from "react";
import { Regions } from "../Regions/Regions";
import { Outlet } from "react-router-dom";
import { getRegions } from "../../Utilities/helpers";
import { ButtonContainer } from "../../Utilities/Buttons/ButtonContainer";
import { BackButton } from "../../Utilities/Buttons/BackButton";
import { HomeButton } from "../../Utilities/Buttons/HomeButton";
import css from "./RegionList.module.css";
import { Dna } from "react-loader-spinner";
import FilterRegions from "../FilterRegions/FilterRegions";

const RegionList = () => {
  const [regions, setRegions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [perPage] = useState(4);

  useEffect(() => {
    setLoading(true);
    getRegions({ page, perPage }).then(setRegions).finally(setLoading(false));
  }, [page, perPage]);

  const shoudLoadingButton =
    regions.length > 0 && regions.length >= perPage && !loading;

  const shouldBackButton = page !== 1 && !loading;

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const backLoad = () => {
    setPage((prevPage) => prevPage - 1);
  };

  return (
    <>
      <ButtonContainer>
        <BackButton />
        <FilterRegions/>
        <HomeButton />
      </ButtonContainer>
      {loading && (
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      )}
      <ul className={css.container}>
        {regions.map(({ _id, name, locPath, image }) => (
          <Regions
            key={_id}
            id={_id}
            name={name}
            locPath={locPath}
            image={image}
          />
        ))}
      </ul>
      <ButtonContainer>
        {shouldBackButton && (
          <button className={css.button} onClick={backLoad}>
            Load Prev
          </button>
        )}
        {shoudLoadingButton && (
          <button className={css.button} onClick={loadMore}>
            Load Next
          </button>
        )}
      </ButtonContainer>

      <Outlet />
    </>
  );
};

export default RegionList;
