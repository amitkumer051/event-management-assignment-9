import Footer from "../../Pages/Home/Footer";
import { FcCustomerSupport } from 'react-icons/fc';
import { FaPhoneAlt } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const ContactUs = () => {
    return (
        <div>
            <div className="hero min-h-[300px]" style={{ backgroundImage: 'url(https://i.ibb.co/hmQbMv3/water.jpg)' }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Contact us</h1>
                        <p>Contact and suppot are available 24/7 for our clients </p>
                    </div>
                </div>
            </div>
            <div className="py-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto text-center gap-10">
                <div className="text-center space-y-6">
                <FcCustomerSupport className="text-7xl text-center mx-auto"></FcCustomerSupport>
                    <p className=" mx-auto justify-center text-2xl font-bold ">Live Support</p>
                    <ul className="font-semibold">
                        <li>Have Questions? Chat Now</li>
                        <li>Need Help? Let Chat</li>
                        <li>Instant Help Desk</li>
                        <li>Chat for Solutions </li>
                    </ul>
                    <button className="btn btn-accent text-white">Start Chat</button>
                </div>
                <div className="text-center space-y-6">
                <FaPhoneAlt className="text-7xl text-center mx-auto"></FaPhoneAlt>
                    <p className=" mx-auto justify-center text-2xl font-bold ">Tele phone Support</p>
                    <ul className="font-semibold">
                        <li>Tele phone: 4803-6353</li>
                        <li>Tele phone: 5803-6321</li>
                        <li>Tele phone: 5403-3453</li>
                        <li>Tele phone: 1234-7857</li>
                    </ul>
                    <button className="btn btn-accent text-white">call now</button>
                </div>
                <div className="text-center space-y-6">
                <SiGmail className="text-7xl text-center mx-auto"></SiGmail>
                    <p className=" mx-auto justify-center text-2xl font-bold ">Mail Support</p>
                    <ul className="font-semibold">
                        <li>example032@gmail.com</li>
                        <li>ak9992342@gmail.com</li>
                        <li>sazzadur123@gmail.com</li>
                        <li>atikur@gmail.com</li>
                    </ul>
                    <button className="btn btn-accent text-white">Contact</button>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default ContactUs;