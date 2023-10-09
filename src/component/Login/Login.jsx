import { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FcGoogle } from 'react-icons/fc';
import Swal from 'sweetalert2'

const Login = () => {
    const { userLogin, signInWithGoogle } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        userLogin(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset()
                Swal.fire('Login Successfull')
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
                Swal.fire(error.message)
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => console.error(error))
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
                    <div className="text-center mt-4">
                        <button onClick={handleGoogleSignIn} className="btn btn-primary">  <FcGoogle className="text-2xl"></FcGoogle>Sign up With Google</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;