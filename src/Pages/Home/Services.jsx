import { useEffect, useState } from "react";
import ServiceData from "./ServiceData";
// import { useLoaderData } from "react-router-dom";

const Services = () => {
    const [serviceData, setServiceData] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServiceData(data))

    }, [])

    return (
        <div className="my-14">
             <h3 className="text-4xl font-bold text-center mb-4  text-gray-700">Our Services</h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 grid-cols-1 mt-8">
                {
                    serviceData.map(service => <ServiceData key={service.id} service={service}></ServiceData>)
                }
            </div>
        </div>
    );
};

export default Services;