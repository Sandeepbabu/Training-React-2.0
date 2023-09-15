import React from "react";

const ApidemoProps = ({ children }) => {

    return (
        <>
            {children.map((data) => {

                return (
                    <div>
                        {data.Name}
                        {data.Pincode}


                    </div>)

            })}
        </>
    );

};


export default ApidemoProps;