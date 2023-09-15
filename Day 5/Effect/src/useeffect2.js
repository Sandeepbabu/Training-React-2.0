import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
const App = () => {

  const [Data, setData] = useState([]);
  const [Meta, setMata] = useState("Hello CEPT MYSURU");
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setData(response.data);
    setMata("Good Morning");
    });

  }, []);

 function buttonClick() {
    setMata("Hiii CEPT");
}

  return (
    <div className="tableForm">
      <div>
        <h2>Name Table</h2>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>

          <tbody>
            {Data.reverse().map((getting) => (
              <tr key={getting.id}>
                <td>{getting.id}</td>
                <td>{getting.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

 

      <div className="col-6">
        <h2>Name: {Meta}</h2>
       
<button onClick={buttonClick}> Click Here</button>
      </div>
    </div>
  );
}
 

export default App;