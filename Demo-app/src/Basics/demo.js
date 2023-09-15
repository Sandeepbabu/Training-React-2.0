import React, { useState } from 'react';
import axios from 'axios';

const Demo = () => {

    const [apiData, setApiData] = useState([]);
    const [pincode, setPincode] = useState(['110001']);
    const [loading, setLoading] = useState([true])




    axios.get(`https://api.postalpincode.in/pincode/${pincode}`)



        .then((response) => {
            console.log("Response", response.data[0].PostOffice);

            setApiData(response.data[0].PostOffice)
            console.log("setApiDate", apiData)

        })






        .finally(() => {
            setLoading(false);

        })


        .catch((error) => {
            console.log("Error loading the page", error)

        })

    return (

        <>

            {/* {loading
   ? <> Loading Pincode </>
   : <> Data obtained </>}   */}

            {loading
                ? <> Loading Pincode </>
                : <> {apiData && apiData.map((data) => {
                    return (

                        <>

                            <div>
                                {data.Name}
                                {data.Circle}
                            </div>
                        </>);

                }
                )} </>}

        </>




    )
}

export default Demo;