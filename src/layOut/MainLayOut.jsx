import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
import Banner from "../Pages/Home/Banner";
import Footer from "../Pages/Home/Footer";


const MainLayOut = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;