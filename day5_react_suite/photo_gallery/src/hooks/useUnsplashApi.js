import { useState, useEffect } from 'react';
import { fetchData } from '../services/unsplashApi';

const useUnsplashApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const response = await fetchData();
        setData(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataAsync();
  }, []);

  return { data, loading, error };
};

export default useUnsplashApi;
