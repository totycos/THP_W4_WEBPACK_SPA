import React, { useEffect } from 'react';
import './index.scss'

const Image = (props) => {
    const { width, alt_description, urls, user } = props.data;

    console.log('hello')
  
    return (
      <li className='card grid-item'>
        <img src={urls.small} alt='avatar' className='card__img'/>
        <p className='card__info'><span className='highlight'><span className='card__info--bold'>{user.first_name} {user.last_name}</span> - {alt_description}</span></p>
      </li>
    );
  };


export default Image;
