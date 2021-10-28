import React from 'react';
import { useHistory } from 'react-router';


const Activity = (props) => {
  const{img,name,_id}=props.activity
    const history=useHistory()
    const register= ()=>{
      history.push(`/register/${_id}`)
    }
   
    return (
        <div onClick={register} className="col-12 col-md-3 g-3">
            <div className="card rounded-5" >
              <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body bg-success rounded-bottom">
                  <p className="card-text">{name}.</p>
                </div>
            </div>
            
        </div>
    );
};

export default Activity;