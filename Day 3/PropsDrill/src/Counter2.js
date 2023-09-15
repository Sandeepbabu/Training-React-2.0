import React from 'react';
import {useCounter} from './ContextProvider';

function Counter2(){
    const {count} = useCounter();

    return(
        <div>
            <h2> No of Counts: {count}</h2>

        </div>
    )
}
export default Counter2;