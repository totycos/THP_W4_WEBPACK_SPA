import { useState } from 'react';
import { fetchData } from '../services/unsplashApi';

const useUnsplashApi = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const fetchDataAsync = async (search = '', size = '') => {
    try {
      const res = await fetchData(search, size);
      setResponse(res);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
console.log('reponse maj dans : useUnsplashApi', response)
  return { response, loading, error, fetchDataAsync };
};

export default useUnsplashApi;

