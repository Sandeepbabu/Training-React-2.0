import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ApidemoProps from './apidemoProps';

const Demo = () => {

    const [apiData, setApiData] = useState([]);
    const [pincode, setPincode] = useState(['110001']);
    const [loading, setLoading] = useState([true])


    useEffect(() => {

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
            });
    }, [pincode]);





    return (

        <>
            <ApidemoProps children={apiData} />
        </>
    );





}

export default Demo;