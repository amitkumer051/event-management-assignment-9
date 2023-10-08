import { NavLink } from "react-router-dom";

const Login = () => {
    return (
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className=" rounded-md flex-shrink-0 w-full max-w-lg  bg-slate-300">
                <div>
                    <h2 className="text-3xl font-bold text-center pt-5">Please Login</h2>
                </div>
                <form className="mx-10 mb-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-success">Login</button>
                    </div>
                    <div className="mt-3 text-center">
                        <p className="text-sm">Do not have an account? Please <NavLink to='/register' className='text-blue-800 font-bold text-sm'>Register</NavLink></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;