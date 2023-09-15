import React from'react';
import {useCounter} from './ContextProvider';

function Counter(){
    const {count, increment,decrement}=useCounter();
    return(
        <div>
            <h2> Counter: {count}</h2>
            <button onClick={increment}> Increase</button>
            <button onClick={decrement}> Decrease</button>
        </div>
    )
}

export default Counter;