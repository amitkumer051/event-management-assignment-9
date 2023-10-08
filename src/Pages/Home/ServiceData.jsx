/* eslint-disable react/prop-types */

const ServiceData = ({ service }) => {
    const { name, image, price, shortDescription, buttonText } = service;
    return (
        <div className=" card-compact  bg-white hover:bg-amber-100 shadow-md rounded-md ">
            <figure><img className="w-full rounded-t-md h-60" src={image} alt="Photo" /></figure>
            <div className="m-3">
                <h2 className="card-title font-bold">{name}</h2>
                <p className="mt-2 mb-3 text-base text-justify font-normal">{shortDescription}</p>
                <p className="mb-2"><span className="text-base font-bold">Price:</span> <span className="text-base">{price}</span></p>
                <div className="w-full">
                    <button className=" rounded-md bg-green-500 p-2 w-full text-white font-bold">{buttonText}</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceData;