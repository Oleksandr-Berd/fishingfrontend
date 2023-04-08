import { useEffect, useState } from "react";

import axios from "axios";


function useFetch(url, {locPath, query, page, perPage }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
    if (locPath) {
    url = url + "/" + locPath
    }
  
  if (query){
    url = url + "/" + query;
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios(
          `${url}?page=${page}&limit=${perPage}`
        );
        const responseData = await response.data.data.results;
        setData(responseData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [url, page, perPage]);
  return { data, isLoading, error };
}
export default useFetch;
