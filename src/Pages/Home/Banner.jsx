import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero h-[460px]" style={{ backgroundImage: 'url(https://i.ibb.co/FgTN70X/banner2.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="lg:max-w-2xl">
                    <Marquee pauseOnHover={true} speed={100}>
                        <Link className="mr-8 " to='/' >Healthe fair going on..... Healthe fair going on..... Healthe fair going on..... Healthe fair going on..... Healthe fair going on.....</Link>
                    </Marquee>
                    <h1 className="mb-5 text-5xl font-bold">Future of Health</h1>
                    <p className="mb-5 text-white">The future of health is dynamic and influenced by various factors, including scientific discoveries, technological advancements, societal changes, and evolving healthcare policies. It is important for healthcare professionals, researchers, policymakers, and the public to stay informed and engaged in discussions about shaping a healthier future.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;





