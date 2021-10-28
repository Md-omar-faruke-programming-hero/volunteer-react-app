
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hook/useAuth';

const PrivateRouter = ({children,...rest}) => {
    const{user,isloading}=useAuth()
    if(isloading){
        return <h1 className="text-center text-danger mt-5"> please wait data loading</h1>
    
    }else{
        return (
            <Route
            {...rest}
            render={({location})=>
            user.email? (children): <Redirect
            to={{
                pathname:"/login",
                state:{
                    from:location
                }
            }}
            ></Redirect>
        }
            >
                
            </Route>
        );

    }
   
};

export default PrivateRouter;