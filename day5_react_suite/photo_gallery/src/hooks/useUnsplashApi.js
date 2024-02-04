import { useState } from 'react';
import { fetchData } from '../services/unsplashApi';

const useUnsplashApi = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1)


  const fetchDataAsync = async (search = '', size = '') => {
    try {
      const res = await fetchData(search, size, page);
      setResponse(res);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchMoreData = async (search = '', size = '') => {
    try {
      setLoading(true);
      const nextPage = page + 1;
      const res = await fetchData(search, size, nextPage); // Passer la nouvelle page à fetchData
      setResponse((prevResponse) => [...prevResponse, ...res]);
      setPage(nextPage); // Mettre à jour la page actuelle
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { response, loading, error, fetchDataAsync, fetchMoreData };
};

export default useUnsplashApi;

