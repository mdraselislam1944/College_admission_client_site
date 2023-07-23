import React, { useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Pages/Authentication/AuthProviders';

const SetPassword = () => {
    const navigate=useNavigate();
    const {changePassword}=useContext(AuthContext);
    const handleChangedPassword=(event)=>{
        event.preventDefault();
        const form = event.target;
        const password = form.password.value;
        changePassword(password)
        .then(()=>{
            alert("changed password successfully");
            window.location.reload();
            navigate('/');
        })
        .catch((message)=>{
            alert(message)
        })
    }
    return (
        <div className='text-center'>
            <form onSubmit={handleChangedPassword}>
                <input required type="password" name="password" id="password" placeholder="Enter new Password" className=" mt-2 input input-bordered w-full max-w-xs" />  <br />
                <input className="btn btn-info w-full max-w-xs my-2" type="submit" value="change password" /> <br />
            </form>
        </div>
    );
};

export default SetPassword;