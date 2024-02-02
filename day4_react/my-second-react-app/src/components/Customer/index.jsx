import React from 'react';
import './style.scss'; 

const Customer = (props) => {
    const { avatar, firstName, lastName, phone, email, job } = props.data;
  
    return (
      <li className='card'>
        <img src={avatar} alt='avatar' className='card__img'/>
        <h1 className='card__name'>{firstName} {lastName}</h1>
        <h2 className='card__job'>{job}</h2>
        <p className='card__email'><a href={`mailto:${lastName}.${firstName}@gmail.com`}>Envoyer un email</a></p>
        <p className='card__phone'><a href={phone}>Tel: {phone}</a></p>
      </li>
    );
  };


export default Customer;