import React, { useEffect, useState } from 'react';
import axios from '../config/axios';
import apiKey from '../config/api-key';

const useDetails = (id) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [details, setDetails] = useState({});

  useEffect(() => {
    setLoading(true);
    setError(false);
    axios({
      method: 'GET',
      url: `/movie/${id}?api_key=${apiKey}&language=en-US`
    }).then(({ data }) => {
      setLoading(false);
      setDetails(data);
      console.log(data);
    }).catch(console.error);
  }, []);

  return { loading, error, details }
}

export default useDetails;
