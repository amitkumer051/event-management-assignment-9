
import ContactUs from "../../component/ContactUs/ContactUs";
import Banner from "./Banner";
import Services from "./Services";
import Trainer from "./Trainer";

const Home = () => {
    return (
        <div className="max-w-6xl mx-auto bg-slate-200">
             <Banner></Banner>
             <Services></Services>
             <Trainer></Trainer>
             <ContactUs></ContactUs>
        </div>
    );
};

export default Home;