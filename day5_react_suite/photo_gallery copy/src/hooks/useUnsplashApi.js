import { useState, useEffect } from 'react';
import { fetchData } from '../services/unsplashApi';

const useUnsplashApi = (search = '', size = '') => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const fetchDataAsync = async (search, size) => {
    try {
      const res = await fetchData(search, size);
      setResponse(res);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { response, loading, error, fetchDataAsync };
};

export default useUnsplashApi;

