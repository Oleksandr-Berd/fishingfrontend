import { useState } from "react";
import { Regions } from "../Regions/Regions";
import { Outlet } from "react-router-dom";
import { ButtonContainer } from "../../Utilities/Buttons/ButtonContainer";
import { BackButton } from "../../Utilities/Buttons/BackButton";
import { HomeButton } from "../../Utilities/Buttons/HomeButton";
import css from "./RegionList.module.css";
import { Dna } from "react-loader-spinner";
import {
  URL,
} from "../../Utilities/URL";
import useFetch from "../../Utilities/Hooks/useFetch";
import ErrorPage from "../Error/ErrorPage";


const RegionList = () => {
  
  const [page, setPage] = useState(1);
  const [perPage] = useState(4);

  const { data, loading, error } = useFetch(URL, { page, perPage })

  const shouldLoadingButton =
    data.length > 0 && data.length >= perPage && !loading;

  const shouldBackButton = page !== 1 && !loading;

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const backLoad = () => {
    setPage((prevPage) => prevPage - 1);
  };

  return (
    <>
      {error && <ErrorPage error={error } />}
      <ButtonContainer>
        <BackButton />
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
        {data.map(({ _id, name, locPath, image }) => (
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
        {shouldLoadingButton && (
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
