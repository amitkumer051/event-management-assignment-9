import { useEffect, useState } from "react";
import Doctors from "./Doctors";

const Trainer = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))

    }, [])
    return (
        <div>
            <h3 className="text-4xl font-bold text-center mb-4  text-blue-900">Our Doctors</h3>
            <div className="m-8  gap-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center text-center mx-auto"> 
               {
                doctors.map(doctor => <Doctors key={doctor.id} doctor={doctor}></Doctors>)
               }
            </div>
        </div>
    );
};

export default Trainer;