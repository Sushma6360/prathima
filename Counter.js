import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(1);

    const decrement =() => setCount(count - 1);

    return(
        <div>
            <h2>Count: {count}</h2>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default Counter;