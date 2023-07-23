import React, { useContext } from 'react';
import { AuthContext } from './AuthProviders';

import { FaGoogle, FaFacebookSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Registration = () => {
    const { createUser, logInGoogle, loginInFacebook, updateProfileDetail,EmailVerification } = useContext(AuthContext);
    const handleRegistration = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const image = form.image.value;
        const imageFile = form.image.files[0];
        const formData = new FormData();
        formData.append('image', imageFile);
        // console.log(imageFile);
        fetch('https://api.imgbb.com/1/upload?key=7a43c068c4477f76ae69e0549062c80e', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                createUser(email, password)
                    // .then(res=>res.json())
                    .then(result => {
                        EmailVerification()
                        .then((r)=>{
                           alert("send you email verification");
                           updateProfileDetail(name,data.data.url_viewer)
                           .then(result=>{
                            alert("Account created");
                           })
                        })
                    })
                
                });
            }
    const handleFacebook = () => {
            loginInFacebook()
                // .then(res=>res.json())
                .then(result => {
                    // console.log(result);
                })
        }
        const handleGoogle = () => {
            logInGoogle()
                // .then(res=>res.json())
                .then(result => {
                    // console.log(result);
                })
        };
        return (
            <div className="text-center">
                <h1 className='text-2xl text-center text-info'>Please Registration</h1>
                <form className="mt-4" onSubmit={handleRegistration}>
                    <input required type="text" name="name" id="name" placeholder="Enter your name " className=" mt-2 input input-bordered w-full max-w-xs" /><br />
                    <input required type="file" name="image" id="image" placeholder="Enter your Image " className=" mt-2 input input-bordered w-full max-w-xs" /><br />
                    <input required type="email" name="email" id="email" placeholder="Enter your email " className=" mt-2 input input-bordered w-full max-w-xs" /><br />
                    <input required type="password" name="password" id="password" placeholder="Enter correct Password" className=" mt-2 input input-bordered w-full max-w-xs" />  <br />
                    <input className="btn btn-info w-full max-w-xs mt-2" type="submit" value="submit" /> <br />
                </form>
                <div>
                    <button onClick={handleGoogle} className="btn btn-info w-full max-w-xs mt-2"><FaGoogle className="text-2xl" />SignIn</button><br />
                    <button onClick={handleFacebook} className="btn btn-info w-full max-w-xs mt-2"><FaFacebookSquare className="text-2xl" />SignIn</button><br />
                    <Link to="/login" className="btn btn-info w-full max-w-xs mt-2">Already Registered? please login</Link>
                </div>
            </div>
        );
    };

    export default Registration;