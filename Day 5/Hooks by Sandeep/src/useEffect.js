import React, { useEffect,useState } from 'react';


export default function Btn() {
    const [count, setCount] = useState(0);
    const [loaded,setLoaded] = useState(false);


useEffect(()=> {
    alert('Hello alert!')
    return()=> alert('good bye alert!')
})

    useEffect( ()=>{ 
    fetch ('foo').then(()=>setLoaded(true))
    },[count]
    )


return(
    <button onClick ={()=> setCount(count+1)}>
        {count}
    </button>
);



}
