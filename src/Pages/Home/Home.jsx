import Banner from "./Banner";
import Footer from "./Footer";
import Services from "./Services";

const Home = () => {
    return (
        <div className="max-w-6xl mx-auto">
             <Banner></Banner>
             <Services></Services>
             <Footer></Footer>
        </div>
    );
};

export default Home;