import { useLoaderData } from "react-router-dom";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const blogs = useLoaderData();
    return (
        <div>
            <div className=" grid  lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 p-10">
            {
                blogs?.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
            }
            </div>
        </div>
    );
};

export default Blogs;