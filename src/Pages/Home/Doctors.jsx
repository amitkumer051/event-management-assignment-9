/* eslint-disable react/prop-types */
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Doctors = ({ doctor }) => {
    const { name, title, image } = doctor;
    useEffect(() => {
        Aos.init();
    })
    return (
        <div data-aos="flip-left">
            <div className="avatar">
                <div className="w-24 mask mask-squircle">
                    <img src={image} />
                </div>
            </div><div data-aos="fade-left">
                <h3><span className="text-base font-bold">Name:</span> <span className="font-semibold">{name}</span></h3>
                <h2><span className="text-base font-bold">Title: </span><span className="font-semibold">{title}</span></h2>
            </div>
        </div>
    );
};

export default Doctors;