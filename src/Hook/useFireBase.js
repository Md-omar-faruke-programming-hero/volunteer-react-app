import { GoogleAuthProvider,getAuth, signInWithPopup,onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import fireBaseInitialization from "../Firebase/Firebase.initial";

fireBaseInitialization()
const useFireBase= ()=>{
    const[user,setUser]=useState('')
    const[isloading,setLoading]=useState(true)

    const provider = new GoogleAuthProvider();
    const auth = getAuth();


    const signInUsingGoogle=()=>{
        setLoading(true)
      return  signInWithPopup(auth, provider)
       

    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            
              console.log(user)
            } 
            setLoading(false)
          });
    },[auth])

    const signout=()=>{
        setLoading(true)
        signOut(auth).then(() => {
            setUser({})
          }).finally(()=>setLoading(false))
    }

    return{
        user,
        signout,
        signInUsingGoogle,
        setLoading,
        isloading
        

    }
}

export default useFireBase;