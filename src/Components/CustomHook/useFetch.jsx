import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [datum, setDatum] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("There is error from the server");
          }
          return res.json();
        })
        .then((data) => {
          setDatum(data.articles);
          // console.log(data.articles);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, 500);
  }, [url]);
  return [datum, loading, page];
};

export default useFetch;
