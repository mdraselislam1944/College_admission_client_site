import React, { useContext } from 'react';
import logo from "./../assets/logo.png";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FaHome, FaSearch } from "react-icons/fa";
import { AuthContext } from '../Pages/Authentication/AuthProviders';
const Navbar = () => {
    const { user, loading, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSearch = (event) => {
        event.preventDefault();
        const search = event.target.search.value;
        event.target.reset();
        if (search) {
            navigate(`relatedCLass/${search}`);
        }
    };
    const handleLogOut = () => {
        logOut()
            .then((result) => {
                alert("Logout Successfully");
                navigate('/login');
            })
            .catch((message) => {
                alert(message)
            })
    }
    return (
        <div>
            <div className='flex justify-between items-center text-center'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {loading?<li className="border-4 border-blue-400 border-solid rounded-full w-8 h-8 animate-spin"></li>:<>
                            {
                                user?<>
                                <li><Link to="/myClass" className="btn mx-2">My College</Link></li>
                                <li> <button onClick={handleLogOut} className='btn  mx-2'>Logout</button></li>
                                <li> <Link to='/changePassword' className='btn  mx-2 '>change pass</Link></li>
                                </>:<>
                                <li> <Link to='/login' className='btn  mx-2'>login</Link></li>
                               
                                </>
                            }
                            </>
                            }
                        </ul>
                    </div>
                    <img className='w-20 h-20 rounded-full' src={logo} alt="Image" />
                    <a className="btn btn-ghost normal-case text-xl text-orange-300 ">Colleges Admission </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        <Link className='text-4xl' to='/'><FaHome /></Link>
                        <li><Link to="/colleges">Colleges</Link></li>
                        <li><Link to="/admission">Admission</Link></li>
                    </ul>
                </div>
                <div className="navbar-end hidden sm:block">
                    <div className='flex items-center justify-end'>
                        {loading ? (
                            <div className="border-4 border-blue-400 border-solid rounded-full w-8 h-8 animate-spin"></div>
                        ) : user ? (
                            <>
                                <Link to="/myClass" className="btn mx-2">My College</Link>
                                <Link to={`/dashboard/${user?.email}`} >  <img className='w-14 h-14 rounded-full mx-2' src={user?.photoURL} alt="Image" /></Link>
                                <button onClick={handleLogOut} className='btn  mx-2'>Logout</button>
                                <Link to='/changePassword' className='btn  mx-2 '>change pass</Link> </>
                        ) : (
                            <Link to='/login' className='btn  mx-2'>login</Link>
                        )}
                    </div>
                </div>
            </div>
            <Link to={`/dashboard/${user?.email}`} >  <img className='lg:hidden w-14 h-14 rounded-full me-10' src={user?.photoURL} alt="Image" /></Link>
            </div>
            <div className='text-center mb-5'>
                <form onSubmit={handleSearch} className='flex items-center justify-center'>
                    <input type="text" name="search" id="search" className="input input-bordered input-info w-full max-w-xs" placeholder='Search' />
                    <button className='text-2xl input input-bordered input-info '><FaSearch /></button>
                </form>
            </div>
        </div>
    );
};

export default Navbar;