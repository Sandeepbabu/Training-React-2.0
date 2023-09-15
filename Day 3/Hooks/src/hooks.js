import React, {useState} from 'react';


function Number(){
    const [count, setCount]=useState(0);
    // const [count, setCount]=useState("ZERO");

    const increment=()=>{
        setCount(count+1);
    };
    // const increment=()=>{
    //         setCount("Increased by One");
    // //         setCount(count+1);
    //     };

    const decrement=()=>{
        setCount(count-1);
    };

    // const decrement=()=>{
    //         setCount("Decreased by One");
    //     };
    

    const reset=()=>{
        setCount(0);
    };


    // const reset=()=>{
    //         setCount("Reset");
    //     };

return(
    <div>
        <h1>Counter</h1>
        <p> Count: {count}</p>

        <button onClick={increment}>Increase</button>
        <button onClick={decrement}>Decrease</button>
        <button onClick={reset}>Reset</button>
    </div>
)
}
export default Number;