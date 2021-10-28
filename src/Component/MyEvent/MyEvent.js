import React, { useEffect, useState } from 'react';

import useAuth from '../../Hook/useAuth';
import pic from "../../image/logos/extraVolunteer.png"


const MyEvent = () => {
    const{user}=useAuth()
    const[volunteer,setVolunteer]=useState([])
    useEffect(()=>{
        fetch("https://stark-taiga-98347.herokuapp.com/volunteer")
        .then(res=>res.json())
        .then(data=>setVolunteer(data.filter(person=> person.email===user.email)))
    },[user.email])
  console.log(volunteer)


  const deleteActivity=(id)=>{
   const process =window.confirm("Are you sure to delete")
   if(process){
    fetch(`https://stark-taiga-98347.herokuapp.com/volunteer/${id}`,{
        method:"delete"
    }).then(res=>res.json())
    .then(data=>{
        if(data.deletedCount>0){
            alert("delete successfully")
            const remain= volunteer.filter(act=>act._id!== id)
            setVolunteer(remain);
        }
    })
   }
}
    return (
      
            <div className="container ">
            <div className="row  my-5">
                    {
                        volunteer.map(user=>  <div className="col-md-5 mb-4 border p-3 ms-2 ">
                        <div className="row">
                            <div className="col-md-4">
                                 <img className="w-100" src={pic} alt="" />
                            </div>
                            <div className="col-md-8">
                             <h2>{user.activity}</h2>
                             <div className="text-end">
                             <button onClick={()=>deleteActivity(user._id)} className="btn btn-danger text-end">cancle</button>
                             </div>
                            </div>
             
                        </div>
                    </div> )
                    }
            </div>
        </div>
       
    );
       
};

export default MyEvent;