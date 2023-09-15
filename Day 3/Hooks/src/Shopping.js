import React, {useState} from 'react';
import Child from './stateliftChild';

//This is Parent
function Shopping(){
    const [count, setCount]=useState(0);
    const incrementCount=()=>{
        setCount(count+1);
    };
    
    const decrementCount=()=>{
        setCount(count-1);
    };

    const resetCount=()=>{
        setCount(0);
    };
return(
    <div>
        <h1>Parent Component</h1>
        <p> Count: {count}</p>

        <button onClick={incrementCount}>Increase</button>
        {/* <button onClick={decrementCount}>Decrease</button> */}
        <button onClick={resetCount}>Reset</button>
        <Child count={count} decrementCount={decrementCount} />
    </div>
)
}
export default Shopping;