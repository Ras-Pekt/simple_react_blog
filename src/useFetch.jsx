import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error(`Could not fetch data. Error: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setIsLoading(false);
        setData(data);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
