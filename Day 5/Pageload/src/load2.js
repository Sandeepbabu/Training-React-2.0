import React, { useEffect, useState } from "react";
import axios from "axios";
import img from "./assets/loading-load.gif"
import './load.css'
// import "./Axios.css"
const Axios = () => {
const [Data, setData] = useState([]);
const [Data1, setData1] = useState([]);
const [loading, setLoading]= useState(true);

  
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((response) => {
      setData(response.data);
      console.log(response);
      setLoading(false);
     
    });
    
  }, []);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/albums").then((response) => {
      setData1(response.data1);
      console.log(response);
      setLoading1(false);
     
    });
    
  }, []);

  return (
    <div className="table">
      
     {loading ?(
      <center>
     <img src={img} alt="loading.."/></center>
     ):(<div className="col-6">
        {/* <center> */}
        <table>
          <thead>
            <tr>
              <th> URL </th>
              <th> NAME </th>
            </tr>
        </thead>
            {Data.slice(1000).map((getting) => (
                 <tr key={getting.id}>
                 <td>{getting.thumbnailUrl}</td>
                 <td>{getting.url}</td>
              </tr>
            
            ))}
            </table>
            {/* </center>   */}
              </div>
              )}
    </div>

  );
}

export default Axios;
