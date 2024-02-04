import React, { useState } from 'react';
import './index.scss'
import searchIcone from './img/search.svg';


const SearchBar = ({ setSearchTerm, setSize, fetchDataAsync }) => {

    const [localSearchTerm, setLocalSearchTerm] = useState('');
    const [localSize, setLocalSize] = useState('');

    const handleSearch = () => {
        fetchDataAsync(localSearchTerm, localSize);
    };

    return (
        <div className="searchBar">
            <input type="text" name="searchBar" id="searchBar" onChange={(e) => setSearchTerm(e.target.value)} placeholder='What image are you looking for ?' />
            <input type="text" name="sizeOption" id="sizeOption" onChange={(e) => setSize(e.target.value)} placeholder='A minimal width ?' />
            <div id="searchBtn" onClick={handleSearch}><img src={searchIcone} alt="search icone" /></div>
        </div>
    );
};

export default SearchBar;
