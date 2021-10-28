import React, { useEffect, useState } from 'react';

import logo from "../../image/logos/Group 1329.png"
import logoo from "../../image/logos/users-alt 1.png"


const VolunteerList = () => {
    const [lists,setList]=useState([])
    useEffect(()=>{
        fetch('https://stark-taiga-98347.herokuapp.com/volunteer')
        .then(res=>res.json())
        .then(data=>setList(data))
    },[lists])



    const deleteUser=(id)=>{
        fetch(`https://stark-taiga-98347.herokuapp.com/Fvolunteer/${id}`,{
            method:"delete"
        }).then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                alert("delete successfully")
                const remain=lists.filter(user=>user._id !== id)
                setList(remain);
            }
        })
    }
   
    return (
    <div>   
     <div className="row mt-5 container">
            <div className="col-md-3 mx-auto">
                   <img className="w-75 mb-4" src={logo} alt="" /> 
                   <p> <img className="img" src={logoo} alt="" />  volunteer register list</p>
                   <p className="text-primary">+ Add Event</p>
                  
            </div>
            <div className="col-md-8 ">
            <table className="table">
                   <thead>
                        <tr>
                        
                        <th >Name</th>
                        <th>EmailId</th>
                        <th >Registation on</th>
                        <th >Event</th>
                        <th >Action</th>
                        </tr>
                    </thead>
      
           
           
               
                        {
                            lists.map(lis=> <tbody >
                        
                                <tr >
                             
                                    <td >{lis.name}</td>
                                    <td>{lis.email}</td>
                                    <td>date</td>
                                    <td>{lis.activity}</td>
                                    <td><button onClick={()=>deleteUser(lis._id)} className="btn btn-danger"><i className="far fa-trash-alt"></i></button></td>         
                                </tr>
                            
                            </tbody> )
                        }
              
                 
            </table>
            </div>
            
     </div>
    </div>
    );
};

export default VolunteerList;