import React, { useEffect } from 'react';
import './index.scss'

const Image = ({ data, onClick }) => {
    const { width, alt_description, urls, user } = data;
  
    return (
      <li className='card grid-item' onClick={onClick}>
        <img src={urls.small} alt={alt_description} className='card__img'/>
        <p className='card__info'><span className='highlight'><span className='card__info--bold'>{user.first_name} {user.last_name}</span> - {alt_description}</span></p>
      </li>
    );
  };


export default Image;
