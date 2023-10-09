import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2'

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, photo, email, password);

        if (password.length < 6) {
            Swal.fire('Password should be at least 6 characters or longer')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            Swal.fire('Your password need one upper case characters.')
            return;
        }
        else if (!/[#$%&?]/.test(password)) {
            Swal.fire('Your password need one Special characters.')
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire('Registration Successfull')
            })
            .catch(error => {
                console.error(error)
                Swal.fire(error.message)
            })
    }
    return (
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className=" rounded-md flex-shrink-0 w-full max-w-xl  bg-slate-200">
                <div>
                    <h2 className="text-3xl font-bold text-center text-gray-700 pt-3">Please Register</h2>
                </div>
                <form onSubmit={handleRegister} className=" mx-10">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Photo url" name="photo" className="input input-bordered" required />
                    </div>
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
                        <button className="btn btn-success">Register</button>
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