import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
const MainLayOut = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayOut;