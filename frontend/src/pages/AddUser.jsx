import React,{useState} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"
export default function AddUser(){
  const [nama,setNama]=useState("")
  const [email,setEmail]=useState("")
  const [alamat,setAlamat]=useState("")
  const nvgt=useNavigate()
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
    addUserData()
    setAlamat("")
    setNama("")
    setEmail("")
  }
  const addUserData=async()=>{
    try{
      const enp="http://localhost:3000/user"
      const response=await axios.post(enp,{
        nama,
        email,
        alamat
      })
      if(response.data.msg === "berhasil menambahkan data"){
       nvgt("/")
      }else{
        alert("terdapat kesalahan")
      }
    }catch(err){
      throw err
    }
    
  }
  return (
    <form onSubmit={handleSubmit} className="w-screen h-full mt-20 flex flex-col items-center font-inter text-[.9em] text-slate-700">
      <input type="teks" placeholder="masukan nama" className="py-2 px-7 w-[80%] rounded outline-none focus:ring-2 focus:ring-green-500 ring-2 ring-slate-700 placeholder:font-thin tracking-widest text-green-600 mb-8" onChange={handleNama} required/>
      <input type="email" placeholder="masukan email" className="py-2 px-7 w-[80%] rounded outline-none focus:ring-2 focus:ring-green-500 ring-2 ring-slate-700 placeholder:font-thin tracking-widest text-green-600 mb-8" onChange={handleEmail} required/>
      <textarea placeholder="masukan alamat" className="py-2 px-7 w-[80%] rounded outline-none focus:ring-2 focus:ring-green-500 ring-2 ring-slate-700 placeholder:font-thin tracking-wide text-green-600 mb-6 placeholder:tracking-widest" onChange={handleAlamat} required/>
      <div className="w-[80%] flex justify-end">
      <button className="py-2 px-2 bg-[#00df0b] rounded text-white font-inter" type="submit">Add user</button>
      </div>
    </form>
    )
}