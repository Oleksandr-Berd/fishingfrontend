import axios from "axios";
import {
  postImageUrl,
  URL,
  URLlocation,
  urlNewLocation,
} from "./URL";

export const getRegions = async ({ page, perPage }) => {
  return await axios
    .get(`${URL}?page=${page}&limit=${perPage}`)
    .then((response) => response.data.data.results)
    .catch((err) => console.log(err));
};

export const getFishingLocations = async ({ locPath, page, perPage }) => {
  return await axios
    .get(`${URL}/${locPath}?page=${page}&limit=${perPage}`)
    .then((response) => response.data.data.results)
    .catch((err) => console.log(err));
};

export const getLocById = async (_id, locPath) => {
  return await axios
    .get(`${URLlocation}/${locPath}/${_id}`)
    .then((response) => response.data.data)
    .catch((err) => console.log(err));
};

export const postNewData = async (
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
) => {
  return await axios
    .post(`${urlNewLocation}/${locPath}`, {
      title,
      coordinates,
      adress,
      fish,
      fishingConditions,
      description,
      allowedTime,
      region: locPath,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const postNewImage = async (data, locPath, id) => {
  return await axios
    .post(`${postImageUrl}/${locPath}/${id}`, data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

// export const patchNewImage = async (data, locPath, _id) => {
//   return await axios
//     .patch(`${patchImageUrl}/${locPath}/${_id}`, data)
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// };

export const getWeather = async ({ latitude, longitude }) => {
  return await axios.get(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`
  );
};
