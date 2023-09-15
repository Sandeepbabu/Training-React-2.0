import React from 'react';
import ChildComponent from './child';
import Child2 from './child2';
import Child3 from './child3';


function ParentProps(){
    const message = "This is from Child 1"
    const greet = "This is from Child 2"
    const qwerty = "THis is from Child 3"

    return(
        <div>
            <ChildComponent Props={message} />
            <Child2 greet={greet}/>
            <Child3 qwerty={qwerty}/>
        </div>
    )
}

export default ParentProps;