import React from 'react';
import { faker } from '@faker-js/faker/locale/fr';
import Customer from '../Customer';
import './style.scss'; 


const Customers = () => {
  let counter = 1;

  const customersList = Array.from({ length: 100 }, () => ({
    id: counter++,
    avatar: faker.image.avatar(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    phone : faker.phone.number(), 
    email: faker.internet.email(),
    job: faker.person.jobTitle(),
  }));

  return (
    <ul className='cardContainer'>
      {customersList.map((customerData) => (
        <Customer data={customerData} key={customerData.id} />
      ))}
    </ul>
  );

};

export default Customers;