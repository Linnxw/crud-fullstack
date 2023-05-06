import {FaUserEdit} from "react-icons/fa"
import {TiUserDelete} from "react-icons/ti"
export default function CardUser({user,eventDelete,eventEdit}){
  return (
    <div className="w-[95%] h-14 rounded bg-sky-500 flex items-center mx-auto mb-3 justify-between overflow-hidden">
      <div className="flex flex-col h-[100%] w-3/4 pl-3">
        <div className="font-inter flex items-end h-[50%]">
         <p>{user.nama}</p>
        </div>
        <div className="flex w-[100%] h-[50%] justify-start items-start italic font-inter text-[.7em]">
         <p className="mr-3">{user.email}</p>
         <p>{user.alamat}</p>
        </div>
      </div>
      <div className="w-1/4 h-[100%] flex items-center justify-between">
        <div className="w-[50%] h-[100%] grid place-items-center">
          <div className="w-[80%] h-[80%] rounded grid place-items-center bg-blue-500" onClick={eventEdit}>
            <FaUserEdit/>
          </div>
        </div>
        <div className="w-[50%] h-[100%] grid place-items-center">
          <div className="w-[80%] h-[80%] rounded grid place-items-center bg-red-500" onClick={eventDelete}>
            <TiUserDelete/>
          </div>
        </div>
      </div>
    </div>
    )
}