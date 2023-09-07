"use client"
import React from 'react'
import { useState,useEffect } from 'react'

const  page = ({params}) => {
  // console.log(params)
  const [user,setuser]=useState([])
  useEffect(async () => {
      var data = await fetch("https://dummyjson.com/users");
      data = await data.json();
      console.log(data.users[params.userinfo]);
      setuser(data.users[params.userinfo]);


    }, []);
  return (
    <div>
      <center><h3>User Information</h3></center>
      <img src={user.image}></img>
      <h5>UserId:{params.userinfo}</h5>
      <h5>Name:{user.firstName}</h5>
      
      <h5>University:{user.university}</h5>
      
    </div>
  )
}

export default page
