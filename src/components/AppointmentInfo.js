import { BiTrash } from "react-icons/bi";
const AppointmentInfos = ({ appointment , onDeleteAppointment })=>{
    return(
        <li className="px-3 py-3 flex items-start">
        <button type="button" onClick={()=>{onDeleteAppointment(appointment.id)}}
          className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <BiTrash /></button>
        <div className="flex-grow" style={{display:"BLock"}}>
          <div className="flex items-center">
            <span style={{display:"BLock"}}className="flex-none font-medium text-2xl text-blue-500"><b className=" text-blue-500">ID : </b>{appointment.id}</span>
          </div>
          <div>
          <span style={{display:"BLock" , textAlign:"left"}} className="flex-grow text-right"><b className="font-bold text-blue-500">UserId : </b>{appointment.userId}</span>
         
            </div>
          <div style={{display:"BLock" , textAlign:"left"}}><b className="font-bold text-blue-500">Owner:</b> {appointment.title}</div>
          <div style={{display:"BLock" , textAlign:"left"}} className="leading-tight"> <b className="font-bold text-blue-500">Body : </b>{appointment.body}</div>
        </div>
      </li>
    )
}

export default AppointmentInfos