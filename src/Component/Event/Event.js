import React, { useRef } from 'react';
import "./Event.css"
import logo from "../../image/logos/Group 1329.png"
import logoo from "../../image/logos/users-alt 1.png"

const Event = () => {
 const eventRef=useRef()
 const descriptionRef=useRef()
 const dateRef=useRef()

const insert=(e)=>{
    e.preventDefault()
    const evaneName= eventRef.current.value;
    const description=descriptionRef.current.value;
    const date=dateRef.current.value;

    const detail={
        name:evaneName,
        description:description,
        date:date,
        img:"https://i.ibb.co/ZW97R0r/animal-Shelter.png"
    }

    fetch("https://stark-taiga-98347.herokuapp.com/data",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(detail)
    }).then(res=>res.json())
    .then(data=>{
        if(data.insertedId){
            alert("Event Added SuccessFully");
            eventRef.current.value="";
            descriptionRef.current.value="";
            dateRef.current.value=""
        }
    })
}

    return (
        <div className="row mt-5 container">
            <div className="col-md-3 mx-auto">
                   <img className="w-75 mb-4" src={logo} alt="" /> 
                   <p> <img className="img" src={logoo} alt="" />  volunteer register list</p>
                   <p className="text-primary">+ Add Event</p>
                  
            </div>
            <div className="col-md-8 ">
                <form onSubmit={insert} >
                <p className="fs-3 me-auto">Add Event</p>
                <div className="row border p-2 mt-5 mb-2">
                    <div className="col-md-6">
                        <label for="basic-url" className="form-label">Event Title</label>
                        <div className="input-group mb-3">
                             <input ref={eventRef} type="text" className="form-control mb-3" id="basic-url" aria-describedby="basic-addon3"/>
                        </div>
                        <label for="basic-url" className="form-label">Description</label>
                        <div className="input-group mb-3">
                             <textarea ref={descriptionRef} type="text" ror="4" col="4" className="form-control mb-3" id="basic-url" aria-describedby="basic-addon3"/>
                        </div>

                    </div>
                    <div className="col-md-6">
                    <label for="basic-url" className="form-label">Event Date</label>
                        <div className="input-group mb-3">
                             <input ref={dateRef} type="date"  className="form-control mb-3" id="basic-url" aria-describedby="basic-addon3"/>
                        </div>
                    <label for="basic-url" className="form-label">Banner</label>
                        <div className="input-group mb-3">
                             <button className="btn btn-outline-primary">upload image</button>
                        </div>

                    </div>

                </div>
                <div className="text-end">
                    <input className="btn btn-primary" type="submit" value="Submit" />
                </div>

                </form>
            </div>
            
        </div>
    );
};

export default Event;