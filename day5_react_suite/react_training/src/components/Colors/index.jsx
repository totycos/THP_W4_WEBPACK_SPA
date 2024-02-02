import React from 'react';
import { useState } from 'react';
import './index.scss'


const Colors = () => {
    const [color, setColor] = useState('red');

    const getColor = () => {
        const clickedColor = window.getComputedStyle(event.target).backgroundColor;
        setColor(clickedColor);
    };

    return (
        <div>
            <div className="squareContainer">
                <div className="square" id='square1' onClick={getColor}></div>
                <div className="square" id='square2' onClick={getColor}></div>
                <div className="square" id='square3' onClick={getColor}></div>
                <div className="square" id='square4' onClick={getColor}></div>
            </div>
            <p>La couleurs cliquée est : {color}</p>
        </div>

    );

};

export default Colors;