import { NavLink } from "react-router-dom";
import './nav.css'
const Navbar = () => {
    const currentPath = window.location.pathname;
    return (
        <div className="navbar bg-green-300 py-3 shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className={currentPath === '/' ? 'active' : ''}><NavLink to='/'>Home</NavLink></li>
                            <li className={currentPath === '/about' ? 'active' : ''}><NavLink to='/about'>About</NavLink></li>
                            <li className={currentPath === '/blog' ? 'active' : ''}><NavLink to='/blog'>Blog</NavLink></li>
                            <li className={currentPath === '/support' ? 'active' : ''}><NavLink to='/support'>Support</NavLink></li>
                    </ul>
                </div>
                <h2 className="text-3xl font-bold text-green-800">TrustCare Health</h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <nav>
                    <ul className=" menu-horizontal px-1 underline-offset-2">
                        <li className={currentPath === '/' ? 'active' : ''}><NavLink to='/'>Home</NavLink></li>
                        <li className={currentPath === '/about' ? 'active' : ''}><NavLink to='/about'>About</NavLink></li>
                        <li className={currentPath === '/blog' ? 'active' : ''}><NavLink to='/blog'>Blog</NavLink></li>
                        <li className={currentPath === '/support' ? 'active' : ''}><NavLink to='/support'>Support</NavLink></li>
                    </ul>
                </nav>
            </div>
            <div className="navbar-end">
                <NavLink to='/login' className="rounded-md bg-green-500 px-3 py-1  text-white font-bold">Login</NavLink>
            </div>
        </div>
    );
};

export default Navbar;