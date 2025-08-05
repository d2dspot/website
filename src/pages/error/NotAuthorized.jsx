import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NotAuthorized = () => {
  
    const navigate = useNavigate()
    const[seconds ,setSeconds] = useState(5)
    useEffect(()=>{
        
        const interval = setInterval(()=>{
            setSeconds((prev)=>prev-1)
        },1000)

        const timeout = setTimeout(()=>{
            navigate("/admin/login")
        },5000)
        return ()=> {
            clearTimeout(timeout)
              clearInterval(interval);

        }
    },[navigate])

    return (
    <div className=" h-screen flex items-center justify-center flex-col">
      <h1 className=" text-3xl font-bold text-rose-500">403-Forbidden</h1>
      <p className=" text-sm text-gray-600 mt-2">
        You do not have permission to access this page.
      </p>
 <p className="text-xs text-gray-400 mt-1">
        Redirecting to login page in 
        <span className=" text-sm text-black" > {seconds} </span>
        second{seconds !== 1 ? "s" : ""}...
      </p>
    </div>
  );
};

export default NotAuthorized;
