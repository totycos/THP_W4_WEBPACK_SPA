import React from 'react';

const MixedContent = (props) => (
  <div className="MixedContent">
    <img src={props.img}></img>
    <h1>{props.title}</h1>
    <p>{props.text}</p>
  </div>
);

export default MixedContent;