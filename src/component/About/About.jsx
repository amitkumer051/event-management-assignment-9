import Footer from "../../Pages/Home/Footer";


const About = () => {
    return (
        <div className="mx-auto  bg-slate-100">
            <div className=" w-full h-[250px] bg-gray-200">
                <h3 className="text-5xl font-bold items-center justify-center text-center text-gray-700 flex py-20"> About TrustCare Health</h3>
            </div>
            <div >
                <h2 className="text-3xl font-bold items-center justify-center text-center text-gray-700 flex mt-10">Core Values</h2>
                <div className="grid lg:grid-cols-2  grid-cols-1 gap-10 mt-4 mb-20 text-justify">
                    <div className=" text-xl space-y-6 p-8">
                        <h2>Our Mission: To provide exceptional healthcare services with compassion and expertise, enhancing the health of our community.</h2>
                        <h2> Comprehensive Care: Our state-of-the-art <span className="text-blue-700">facility offers</span> a wide range of services, including emergency care, surgeries, diagnostics, and more.</h2>
                        <h2> Patient-Centered: Your health, comfort, and safety are at the heart of everything we do.</h2>
                        <h2>   Expert Team: Our experienced team of <span className="text-blue-700">healthcare professionals</span> is here to provide the highest quality care.</h2>

                    </div>
                    <div  className=" text-xl space-y-6 p-8">
                        <h2>
                            Accredited Excellence: We are accredited and <span className="text-blue-700">recognized</span> for our commitment to delivering top-notch healthcare.
                        </h2>
                        <h2>
                            Real Stories: Explore the <span className="text-blue-700">stories of patients</span> who have experienced the difference of care at Trust Care Health.
                        </h2>
                        <h2>
                            Community Involvement: We actively engage with our community through health education and outreach programs.
                        </h2>
                        <h2>
                            For appointments or inquiries, <span className="text-blue-700">please do not hesitate</span> to contact us.
                            Visit us today and experience the care you deserve.
                        </h2>
                    </div>
                </div>
            </div>
            <div className="text-center mb-20 ">
                <div className="stats stats-vertical lg:stats-horizontal  shadow">

                    <div className="stat">
                        <div className="stat-title">Total Appointment</div>
                        <div className="stat-value">23K</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">New Appointment</div>
                        <div className="stat-value">4,200</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">New Registration</div>
                        <div className="stat-value">1,200</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>

                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default About;