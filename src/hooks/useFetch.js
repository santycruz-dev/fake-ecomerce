import { useState, useEffect } from 'react';
import apiCall from '../utiles/apiCall'

const useFetch = (url) => {
  const [data, setData] = useState([]);  

  useEffect(() => {
    apiCall(url)
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error)
      });
  }, [url]);

  return { data };

};

export default useFetch