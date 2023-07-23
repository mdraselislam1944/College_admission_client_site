import React, { createContext, useEffect, useState } from 'react';

import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updatePassword, updateProfile } from "firebase/auth";
import app from '../../Firebase/Firebase.config';

export const AuthContext=createContext(null);
const googleProvider=new GoogleAuthProvider();
const facebookProvider=new FacebookAuthProvider();
const githubProvider=new GithubAuthProvider();
const auth=getAuth(app);
const AuthProviders = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const singIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut = () => {
        return signOut(auth);
    }
    const loginInFacebook=()=>{
        setLoading(true);
        return signInWithPopup(auth,facebookProvider);
    }
    const logInGithub=()=>{
        setLoading(true);
        return signInWithPopup(auth,githubProvider);
    }
    const logInGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }
    const updateProfileDetail=(name,photoUrls)=>{
        return updateProfile(auth.currentUser,{displayName:name, photoURL:photoUrls,});
    }

    const EmailVerification=()=>{
        return sendEmailVerification(auth.currentUser)
    }

    const resetPasswordWithEmail=(email)=>{
        setLoading(true);
       return sendPasswordResetEmail(auth,email) 
    }
    const changePassword=(newPassword)=>{
        setLoading(true);
        return updatePassword(user,newPassword)
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            return unsubscribe();
         }
    },[])
    
    const authInfo={
        user,
        loading,
        createUser,
        singIn,
        logOut,
        logInGoogle,
        loginInFacebook,
        updateProfileDetail,
        EmailVerification,
        resetPasswordWithEmail,
        changePassword,
        logInGithub,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;