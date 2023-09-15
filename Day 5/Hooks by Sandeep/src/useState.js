import React, {useState} from 'react';

export default function Sandeep(){
    const [name,setID]=useState(250) //user given initial value gets store into name for first time


// funtion  setID(){
//     setID(name + 1);
// }

return(
<button onClick= { ()=> setID (name * 15)}>
<h1>
{name}
</h1>

</button>
)
}