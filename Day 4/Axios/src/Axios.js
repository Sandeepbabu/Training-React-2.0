//https://jsonplaceholder.typicode.com/users
import React, {useEffect, useState} from "react";
import axios  from "axios";

const Axios = () =>{
const [userData, setData] = useState([]);
const [Meta, setMeta] = useState([]);


useEffect(() =>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response) =>{console.log(response); //console.log to get response
    setData(response.data);
});
}, []); //   []  is an Empty array to fetch data from link

return(
    <div className="text-center mt-9"> {userData.map((table) => 
        {return (<div> {`User ID:${table.id},     
                        Name:${table.name}
                        username:${table.username}
                        email:${table.email}
                        address:${table.address.street}
                        zipcode:${table.address.zipcode}
                        company:${table.company.catchPhrase}`}</div>)})}
    </div>    
) 

};
export default Axios;