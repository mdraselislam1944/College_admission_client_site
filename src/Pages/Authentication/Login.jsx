import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthProviders';

import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useNavigate,useLocation } from 'react-router-dom';
const Login = () => {
    const navigate=useNavigate();
    const location=useLocation();
    const [flag, setFlag] = useState(false);
    const { singIn, logInGoogle, logInGithub,resetPasswordWithEmail } = useContext(AuthContext);
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        singIn(email, password)
            // .then(res=>res.json())
            .then(result => {
                navigate(location.state?.from?.pathname || "/");
            })
    }
    const handleFacebook = () => {
        logInGithub()
            // .then(res=>res.json())
            .then(result => {
                navigate(location.state?.from?.pathname || "/");
            })
    }
    const handleGoogle = () => {
        logInGoogle()
            // .then(res=>res.json())
            .then(result => {
                navigate(location.state?.from?.pathname || "/");
            })
    }
    const handelToggle = () => {
        setFlag(true);
    }
    const handleChangedPassword = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        // console.log(email);
        resetPasswordWithEmail(email)
        .then(()=>{
            alert('check your email for changed password');
        })
        .catch(message=>{
            alert(message);
        })
        form.reset();
        setFlag(false);
    }
    return (
        <div className="text-center">
            <h1 className='text-2xl text-center text-info'>Please Login</h1>
            <form className="mt-4" onSubmit={handleLogin}>
                <input required type="email" name="email" id="email" placeholder="Enter your email" className=" mt-2 input input-bordered w-full max-w-xs" /><br />
                <input required type="password" name="password" id="password" placeholder="Enter correct Password" className=" mt-2 input input-bordered w-full max-w-xs" />  <br />
                <input className="btn btn-info w-full max-w-xs mt-2" type="submit" value="submit" /> <br />
            </form>
            {
                flag ? <>
                    <form onSubmit={handleChangedPassword}>
                        <input required type="email" name="email" id="email" placeholder="Enter your registered email" className=" mt-2 input input-bordered w-full max-w-xs" />  <br />
                        <input className="btn btn-info w-full max-w-xs mt-2" type="submit" value="change password" /> <br />
                    </form>
                </> : <>
                    <button onClick={handelToggle} className='btn btn-info w-full max-w-xs mt-2'>forget Password</button><br />
                </>
            }
            <button onClick={handleGoogle} className="btn btn-info w-full max-w-xs mt-2"><FaGoogle className="text-2xl" />SignIn</button><br />
            <button onClick={handleFacebook} className="btn btn-info w-full max-w-xs mt-2"><FaGithub className="text-2xl" />SignIn</button><br />
            <Link to="/register" className="btn btn-info w-full max-w-xs my-2">New User? Create Account</Link>
        </div>
    );
};

export default Login;