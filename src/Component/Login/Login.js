import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hook/useAuth';

import logo from "../../image/logos/Group 1329.png"

const Login = () => {
    const history=useHistory()
    const location=useLocation()
    const redirect_uri= location.state?.from || "/home"
    const{signInUsingGoogle}=useAuth()

     const signInUsingGoogle1=()=>{
        signInUsingGoogle()
        .then((result) => {
            history.push(redirect_uri);
        })
     }
    return (
        <div>
            <div className=" my-2 text-center">
                <img className="w-25" src={logo} alt="" />
            </div>
            <div className="w-25 h-75 mx-auto border">
            <div className="text-center ">
            <h3 className="mt-5 mx-5 mb-5">Login With</h3>
            <button onClick={signInUsingGoogle1}  className="btn btn-transparent border border-1 rounded-pill mb-5 px-5"> <i className="fab fa-google me-3 "></i> Continue With Google</button>
            </div>
            </div>
        </div>
    );
};

export default Login;