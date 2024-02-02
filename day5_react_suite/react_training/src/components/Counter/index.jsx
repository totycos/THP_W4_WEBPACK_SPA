import React from 'react';
import { useState } from 'react';
import BigNumber from '../BigNumber'

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <p>Counting: <BigNumber count={count} /></p>
        </div>
    );
};

export default Counter;
