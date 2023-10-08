/* eslint-disable react/prop-types */

const Doctors = ({ doctor }) => {
    const { name, title, image } = doctor;
    return (
        <div>
            <div className="avatar">
                <div className="w-24 mask mask-squircle">
                    <img src={image} />
                </div>
            </div><div>
                <h3><span className="text-base font-bold">Name:</span> <span className="font-semibold">{name}</span></h3>
                <h2><span className="text-base font-bold">Title: </span><span className="font-semibold">{title}</span></h2>
            </div>
        </div>
    );
};

export default Doctors;