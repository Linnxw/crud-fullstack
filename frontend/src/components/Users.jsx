import CardUser from "./CardUser"
import axios from "axios"
import {useNavigate} from "react-router-dom"
export default function Users({data}){
  const nvgt=useNavigate()
  const handleDelete=async(id)=>{
    const res=await axios.delete(`http://localhost:3000/user/${id}`)
    window.location.reload()
  }
  return (
    <div className="w-screen h-full">
      {
        data?.map(m=>{
          return <CardUser key={m.id} user={m} eventDelete={()=>handleDelete(m.id)} eventEdit={()=>nvgt(`/edit/${m.id}`)}/>
        })
      }
    </div>
    )
} 