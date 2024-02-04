import React from 'react'
import ReactDOM from 'react-dom'
import { useEffect } from 'react';
import SearchBar from './components/SearchBar'
import Images from './components/Images'
import ShowMoreBtn from './components/ShowMoreBtn'
import useUnsplashApi from './hooks/useUnsplashApi';
import './index.scss'

const App = () => {
  const { response, loading, error, fetchDataAsync, fetchMoreData } = useUnsplashApi();

  const handleShowMore = () => {
    fetchMoreData();
  };

  useEffect(() => {
    // Déclenchez la recherche initiale ici avec des valeurs par défaut ou vides
    fetchDataAsync();
  }, []);

  return (
    <div>
      <SearchBar fetchDataAsync={fetchDataAsync}/>
      <Images response={response} loading={loading} error={error} />
      <ShowMoreBtn onClick={handleShowMore}/>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root')); 