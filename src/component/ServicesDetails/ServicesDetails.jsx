import { Link, useLoaderData, useParams } from "react-router-dom";

const ServicesDetails = () => {
    const services = useLoaderData();
    const { id } = useParams()
    const serviceData = services?.find(service => service.id == id);
    console.log(serviceData);
    return (
        <div className=" bg-base-200">
            <div className=" lg:pt-0  pt-28">
                <div className="hero-content h-96 flex-col lg:flex-row-reverse ">
                    <img src={serviceData.image} className="max-w-sm rounded-lg " />
                    <div>
                        <h1 className="text-5xl font-bold ">{serviceData.name}</h1>
                        <p className="py-6 mx-auto">{serviceData.shortDescription}</p>
                        <Link to='/'>
                            <button className=" rounded-md bg-green-500 p-2 text-white font-bold">Back to Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;