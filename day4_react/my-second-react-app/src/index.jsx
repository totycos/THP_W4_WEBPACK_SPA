import React from 'react';
import ReactDOM from 'react-dom';
import Customers from './components/Customers';
import './style.scss'; 

const App = () => (
  <div>
    <h1 className='title'>🚀 Customers list</h1>
    <Customers />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root')); 