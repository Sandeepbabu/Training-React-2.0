import React,{useState,useEffect} from 'react'
import axios from 'Axios';

const Apidemo = () => {

const [apiData,setApiData] = useState([]);
const [pincode, setPincode] = useState('110001');
const [loading,setLoading] = useState([true]);



axios.get(`https://api.postalpincode.in/pincode/${pincode}`)
.then((response)=>{
    // console.log("Response", response);
    // console.log("Response", data);
    console.log("Response", data[0].Message);

})


setApiData(response.data[0].postoffice);
console.log('setApiData', apiData);


//when there is huge data, we use data is loading..

.finally(()=>{
    setLoading(false);
})

.catch((error)=>{
console.log("Error in fetching the data", error);
setLoading(false); 
})



  return (
    <>
{loading? <> Page is Loading </>: <>Data is obtained </>}

   </>
  )
}

export default Apidemo;
