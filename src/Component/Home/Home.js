import React, { useEffect, useState } from 'react';
import Activity from "../Activity/Activity"

const Home = () => {
    const[activitys,setActivity]=useState([])
    useEffect(()=>{
        fetch("https://stark-taiga-98347.herokuapp.com/data")
        .then(res=>res.json())
        .then(data=>setActivity(data))
    },[])
   
    return (
        <div>
            <div className="text-center mt-4">
                <h1>I GROW BY HEALPING PEOPLE IN NEED</h1>
                <form className="d-flex w-25 mx-auto">
                   <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                   <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>

          <div className="container my-5">
          <div className=" row ">
                {
                    activitys.map(activity=> <Activity key={activity._Id} activity={activity}></Activity> )
                }
           </div>
          </div>
        </div>
    );
};

export default Home;