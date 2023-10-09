/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setuUser]=useState(null);
    const [loading ,setLoading] =useState(true)

    const GoogleProvider =new GoogleAuthProvider();

    const signInWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth,GoogleProvider)
    }
    const createUser = (email,password)=>{
        setLoading(true)
      return  createUserWithEmailAndPassword(auth,email,password)
    }
    const userLogin = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
        setLoading(true)
       return signOut(auth)
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            console.log('User in the auth state change', currentUser);
            setuUser(currentUser)
            setLoading(false)
        });
        return()=>{
            unSubscribe();
        }
    })
    const authInfo={
        user,
        createUser,
        userLogin,
        logOut,
        loading,
        signInWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;