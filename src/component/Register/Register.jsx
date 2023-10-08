import { NavLink } from "react-router-dom";


const Register = () => {
    return (
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className=" rounded-md flex-shrink-0 w-full max-w-xl bg-slate-300">
                <div>
                    <h2 className="text-3xl font-bold text-center pt-3">Please Register</h2>
                </div>
                <form className=" mx-10">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Photo url" className="input input-bordered" required />
                    </div>
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
                        <button className="btn btn-neutral">Login</button>
                    </div>
                    <div className="mt-4  mb-4 text-center">
                        <p className="text-sm">Already have an account? Please <NavLink to='/login' className='text-blue-800 font-bold text-sm'>Login</NavLink></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;