import React from 'react';
import ReactDOM from 'react-dom';
import Paragraphs from './components/Paragraphs';
import TotalAmount from './components/TotalAmount';
import MixedContent from './components/MixedContent';

import brolyImage from './components/MixedContent/assets/broly.jpeg';
import gokuImage from './components/MixedContent/assets/goku.jpeg';
import goku2Image from './components/MixedContent/assets/goku2.jpeg';
import vegetaImage from './components/MixedContent/assets/vegeta.jpeg';
import vegetoImage from './components/MixedContent/assets/vegeto.jpeg';


const App = () => (
  <div>
    <h1>Hello World!</h1>
    <Paragraphs />
    <ul>
      <li>Books: <TotalAmount amount={154} /></li> 
      <li>Pencils: <TotalAmount amount={12.85} /></li> 
      <li>Erasers: <TotalAmount amount={18} /></li>
    </ul>
    <MixedContent img={brolyImage} title={'Broly'} text={'Pas tres sympa'} />
    <MixedContent img={gokuImage} title={'Goku'} text={'Tres sympa'}/>
    <MixedContent img={goku2Image} title={'Encore Goku'} text={'Un peu con quand meme'}/>
    <MixedContent img={vegetaImage} title={'Vegeta'} text={'Le roi des sayans'}/>
    <MixedContent img={vegetoImage} title={'Vegeto'} text={'Oula'}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));