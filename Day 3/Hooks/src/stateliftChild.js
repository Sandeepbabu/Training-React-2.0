import React from 'react';

//This is child


// export default function Child({count}){
    export default function Child({count,decrementCount}){
    
    
    return(
        <div>
            <h2> Child Component </h2>
            <p> Received count from parent: {count}</p>


            <button onClick={decrementCount}>Decrease</button>
        
        
        </div>
    )
}