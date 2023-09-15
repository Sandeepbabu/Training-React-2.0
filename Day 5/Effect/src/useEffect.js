import React, {useState, useEffect} from 'react';


export default function UseEffectcomponent(){
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
        useEffect(() => {
            console.log("calluseEffect")
        });

        function increment (){
            setNumber1(number1+1);
        }


        function decrement (){
            setNumber2(number2-1);
        }
return(
<div>
<h2> Click Count: {number1}</h2>
<button onClick = {increment}> Click Here to Increase </button>
<h2> Click Count: {number2}</h2>
<button onClick = {decrement}> Click Here to Decrease </button>
</div>

)



}
