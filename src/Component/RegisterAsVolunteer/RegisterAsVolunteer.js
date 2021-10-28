import React, { useEffect, useRef, useState } from 'react';
import logo from "../../image/logos/Group 1329.png"
import "./RegisterAsVolunteer.css"
import { useParams } from 'react-router';
import useAuth from '../../Hook/useAuth';

const RegisterAsVolunteer = () => {
    const{user}=useAuth()
    
const {id}=useParams();
const[singleItem,setSingleItem]=useState({})
useEffect(()=>{
    fetch('https://stark-taiga-98347.herokuapp.com/data')
    .then(res=>res.json())
    .then(data=>setSingleItem(data.find(item=> item._id===id)))
},[id])




const nameRef=useRef();
const emailRef=useRef();
const desRef=useRef();
const dateRef=useRef();
const activityRef=useRef();

const submit=e=>{
    e.preventDefault()
    const name=nameRef.current.value;
    const email=emailRef.current.value;
    const description=desRef.current.value;
    const date= dateRef.current.value;
    const activity=activityRef.current.value;

    const user={
        name:name,email:email,description:description,data:date,activity:activity
    }

    fetch("https://stark-taiga-98347.herokuapp.com/volunteer",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(user)
    }).then(res=>res.json())
    .then(data=>{
        if(data.insertedId){
            alert("Thank you for your interest")
            nameRef.current.value="";
            emailRef.current.value="";
            desRef.current.value="";
            dateRef.current.value="";
            activityRef.current.value=""
        }
    })

}


    return (
        <div className="text-center">
           <div className="text-center">
               <img className="w-25" src={logo} alt="" />
           </div>
           <div className="w-50 mb-5  mx-auto border ">
           <div className="text-center ">
               <h2 className="mx-5 mt-5">Register as a Volunteer</h2>
              <form onSubmit={submit}>
                <div className="inputField">
                <input ref={nameRef} className=" w-50 my-3 border-bottom border-2 border-dark" type="text" value={user.displayName || ""}  /> <br />
                <input className="w-50 border-bottom border-2 border-dark" type="text" ref={emailRef} value={user.email ||""}/> <br />
                <input ref={dateRef} className="w-50 my-3 border-bottom border-2 border-dark" type="date"   placeholder="Date" required/> <br />
                <input ref={desRef} className="w-50 border-bottom border-2 border-dark" type="text"   placeholder="Description" required/> <br />
                <input ref={activityRef} className="w-50 my-3 border-bottom border-2 border-dark" type="text" value={singleItem.name}/> <br />
                <input className="w-50 btn btn-info mb-5" type="submit" value="Registation" />
                </div>
              </form>
           </div>
           </div>
        </div>
    );
};

export default RegisterAsVolunteer;