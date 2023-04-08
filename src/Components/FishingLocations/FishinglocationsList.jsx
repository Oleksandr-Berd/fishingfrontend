import { useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { BackButton } from "../../Utilities/Buttons/BackButton";
import { ButtonContainer } from "../../Utilities/Buttons/ButtonContainer";
import { HomeButton } from "../../Utilities/Buttons/HomeButton";
import { Dna } from "react-loader-spinner";
import css from "./FishingLocationsList.module.css";
import lastImage from "../../Utilities/Images/common/how_to_surf_fish.jpg";
import useFetch from "../../Utilities/Hooks/useFetch";
import { URL } from "../../Utilities/URL";
import ErrorPage from "../Error/ErrorPage";

const FishingLocationsList = () => {
  const { locPath } = useParams();
  const [page, setPage] = useState(1);
  const [perPage] = useState(3);
  const { data, isLoading, error } = useFetch(URL, {locPath, page, perPage });

console.log(data);

  
  const shouldLoadingButton = data && data.length >= perPage && !isLoading;

  const shouldBackButton = page !== 1 && !isLoading;

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const backLoad = () => {
    setPage((prevPage) => prevPage - 1);
  };

  return (
    <div>
      <ButtonContainer>
        <BackButton />
        <HomeButton />
      </ButtonContainer>
      {error && <ErrorPage />}
      {isLoading && (
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      )}
      <div className={css.container}>
        {data.length > 0 && (
          <ul className={css.gridContainer}>
            {data &&
              data.map(({ title, adress, picture, fish, _id }) => (
                <div key={_id} className={css.item}>
                  <img
                    className={css.locationPicture}
                    src={`${picture[0]}`}
                    alt={title}
                  />
                  <Link to={_id} key={_id} className={css.locationItem}>
                    <h1 className={css.locationTitle}>{title}</h1>
                  </Link>
                  <h3 className={css.adress}>{adress}</h3>
                  <ul className={css.fishList}>
                    {fish.map((el) => (
                      <li key={el} className={css.fishItem}>
                        {el}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </ul>
        )}
        {data.length === 0 && (
          <>
            <Dna
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
            <h1 className={css.endTitle}>
              Oops! There is no more locations in this region!
            </h1>
            <img src={lastImage} alt={lastImage} />
          </>
        )}

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
      </div>
    </div>
  );
};

export default FishingLocationsList;
