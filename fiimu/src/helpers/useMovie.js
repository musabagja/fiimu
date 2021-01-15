import { useEffect, useState } from 'react';
import axios from '../config/axios';
import { CancelToken, isCancel } from 'axios';
import apiKey from '../config/api-key';

const useMovie = (pageNumber) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    let cancel;
    setLoading(true);
    setError(false);
    axios({
      method: 'GET',
      url: `/movie/now_playing?api_key=${apiKey}&language=en-US&page=${pageNumber}`,
      cancelToken: new CancelToken(c => cancel = c)
    }).then(({ data }) => {
      setMovies(prevMovies => {
        return [...new Set([...prevMovies, ...data.results])];
      })
      setHasMore(data.results.length > 0);
      setLoading(false);
      console.log(data)
    }).catch(err => {
      if (isCancel(err)) return;
      setError(true);
    })
    return () => cancel();
  }, [pageNumber]);

  return { loading, error, movies, hasMore}
}

export default useMovie;
