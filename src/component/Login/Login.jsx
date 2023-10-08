import { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const {userLogin}=useContext(AuthContext)
    const location =useLocation()
    const navigate =useNavigate()
    // console.log(location);
    const handleLogin = e=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        console.log(email,password);

        userLogin(email,password)
        .then(result =>{
            console.log(result.user);

            navigate(location?.state? location.state : '/')
        })
        .catch(error =>console.error(error))
    }
    return (
        <div className="hero-content flex-col lg:flex-row-reverse mt-4">
            <div className=" rounded-md flex-shrink-0 w-full max-w-lg  bg-slate-200">
                <div>
                    <h2 className="text-3xl font-bold text-center text-gray-700 pt-5">Please Login</h2>
                </div>
                <form onSubmit={handleLogin} className="mx-10 mb-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Your Email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
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