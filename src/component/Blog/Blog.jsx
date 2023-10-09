/* eslint-disable react/prop-types */
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
const Blog = ({ blog }) => {
    const { title, content, author, date } = blog;
    useEffect(() => {
        Aos.init();
    })
    return (

        <div data-aos="flip-left" className="card card-compact  p-2 bg-gray-200">
            <div className="card-body">
                <h2 data-aos="flip-left" className="card-title">{title}</h2>
                <p  data-aos="flip-left">{content}</p>
                <p  data-aos="flip-left">Date: {date}</p>
                <div className="card-actions justify-end">
                    <div className="font-bold"  data-aos="flip-left">{author}</div>
                </div>
            </div>
        </div>
    );
};

export default Blog;

{/* <div data-aos="flip-left"></div> */}