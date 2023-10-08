import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Services = () => {
    const [serviceData,setServiceData]=useState([])
   const services =useLoaderData(null)

    return (
        <div>
            <h2 className="text-3xl font-bold text-center">Our Services</h2>
        </div>
    );
};

export default Services;