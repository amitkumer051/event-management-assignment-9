import Banner from "./Banner";
import Footer from "./Footer";
import Services from "./Services";
import Trainer from "./Trainer";

const Home = () => {
    return (
        <div className="max-w-6xl mx-auto bg-slate-200">
             <Banner></Banner>
             <Services></Services>
             <Trainer></Trainer>
             <Footer></Footer>
        </div>
    );
};

export default Home;