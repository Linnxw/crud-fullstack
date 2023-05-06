import { useState,useEffect } from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"
import Users from "../components/Users"
export default function Home(){
  const [user,setUser]=useState([])
  useEffect(()=>{
    getUser()
  },[])
 
  const nvgt=useNavigate()
  const getUser=async()=>{
    const endp="http://localhost:3000/user"
    try{
      const response=await axios.get(endp)
      setUser(response.data.data)
    }
    catch(err){
      throw err
    }
  }
  
  return (
    <>
    <div className="w-screen mb-10 mt-4 pl-5">
      <button className="py-1 px-2 bg-[#00df0b] rounded text-white font-inter" onClick={()=>nvgt("/add")}>Add user</button>
    </div>
    <Users data={user}/>
    </>
    )
}