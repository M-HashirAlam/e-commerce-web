"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'


const User = () => {
    const [user,setuser]=useState([])
    useEffect(async () => {
        var data = await fetch("https://dummyjson.com/users");
        data = await data.json();
        console.log(data.users);
        setuser(data.users);


      }, []);
      
      
  return (
    <div>
        
        <h1>Hello</h1>
       {/* {
        user.map((item)=>{
            <h4>{item.firstName}</h4>
        })
       } */}
       
       {user.map((item)=>(
            
            <div>
              <Link href={`/user/${item.id}`}>{item.firstName}</Link>
              </div>
          ))}
          
    
    </div>
  )
}

export default User
