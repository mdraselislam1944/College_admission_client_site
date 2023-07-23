import React, { useContext } from 'react';
import { AuthContext } from '../Pages/Authentication/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();
    if(loading){
       return <span className="loading loading-spinner text-primary text-center"></span>
    }
    else if(user){
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace ></Navigate>
};

export default PrivateRoute;