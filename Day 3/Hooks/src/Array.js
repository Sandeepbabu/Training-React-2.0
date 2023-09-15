import React, {useState} from 'react';



function Array(){
    const [count, setCount]=useState(0);
    const increment=()=>{
         setCount(count+1);
        };
    
    const [items, setItems]=useState([]);
    
    const addItem = () => {
        setItems([...items, `Item ${items.length +1}`]);   //this (`) is not single quote
        };
    const subItem = () => {
        setItems([...items, `Item ${items.length-1}`]);   //this (`)is not single quote
        };
         
    
    return(
<div>
<h1>Counter</h1>
        <p> Count: {count}</p>
<button onClick={increment}>Increase</button>
    <h1> Array State Example</h1>
    <button onClick={addItem}> Add </button>
    <button onClick={subItem}> Sub </button>
    <ol>
        {items.map((item)=> (
            <li>{item}</li>))
        }
    </ol>
</div>
    );
}
export default Array;