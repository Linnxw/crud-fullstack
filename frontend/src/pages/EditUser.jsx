import React,{useState,useEffect} from "react"
import axios from "axios"
import {useNavigate,useParams} from "react-router-dom"
export default function AddUser(){
  const [nama,setNama]=useState("")
  const [email,setEmail]=useState("")
  const [alamat,setAlamat]=useState("")
  const nvgt=useNavigate()
  const {id}=useParams()
  useEffect(()=>{
   getUser()
  },[])
  
const getUser=async()=>{
    const endp=`http://localhost:3000/user/${id}`
    try{
      const response=await axios.get(endp)
      setNama(response.data.data[0].nama)
      setEmail(response.data.data[0].email)
      setAlamat(response.data.data[0].alamat)
    }
    catch(err){
      throw err
    }
  }
  
  const handleNama=({target:{value}})=>{
    setNama(value)
  }
  const handleEmail=({target:{value}})=>{
    setEmail(value)
  }
  const handleAlamat=({target:{value}})=>{
    setAlamat(value)
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    editUserData()
    setAlamat("")
    setNama("")
    setEmail("")
  }
  const editUserData=async()=>{
    try{
      const enp=`http://localhost:3000/user/${id}`
      const response=await axios.put(enp,{
        nama,
        email,
        alamat
      })
       console.log(response)
       nvgt("/")
    }catch(err){
      console.log(err)
    }
    
  }
  return (
    <form onSubmit={handleSubmit} onClick={()=>console.log({nama,alamat,email})} className="w-screen h-full mt-20 flex flex-col items-center font-inter text-[.9em] text-slate-700">
      <input type="teks" placeholder="masukan nama" className="py-2 px-7 w-[80%] rounded outline-none focus:ring-2 focus:ring-green-500 ring-2 ring-slate-700 placeholder:font-thin tracking-widest text-green-600 mb-8" onChange={handleNama} value={nama} required/>
      <input type="email" placeholder="masukan email" className="py-2 px-7 w-[80%] rounded outline-none focus:ring-2 focus:ring-green-500 ring-2 ring-slate-700 placeholder:font-thin tracking-widest text-green-600 mb-8" onChange={handleEmail} value={email} required/>
      <textarea placeholder="masukan alamat" className="py-2 px-7 w-[80%] rounded outline-none focus:ring-2 focus:ring-green-500 ring-2 ring-slate-700 placeholder:font-thin tracking-wide text-green-600 mb-6 placeholder:tracking-widest" onChange={handleAlamat} value={alamat} required/>
      <div className="w-[80%] flex justify-end">
      <button className="py-2 px-2 bg-[#00df0b] rounded text-white font-inter" type="submit">Add user</button>
      </div>
    </form>
    )
}