import React from 'react';

const TotalAmount = (props) => ( // argument props de React
  <span className="TotalAmount">
    Total: {props.amount} € 
  </span>
);

export default TotalAmount;