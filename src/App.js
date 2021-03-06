import React from 'react';
import { useState ,useEffect ,useCallback } from 'react';
import { BiArchive , BiLock, BiTrash } from "react-icons/bi";
import './App.css';
import AddAppointment from './components/AddAppointment';
import Search from './components/Search';
import AppointmentInfos from './components/AppointmentInfo';



function App() {

  let [AppointmentList , setAppointmentList] = useState([]);
  let [query , setQuery] = useState("");

  const filteredAppointments=AppointmentList.filter(item=>{
    return(
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.body.toLowerCase().includes(query.toLowerCase())
    )
  })
  const fetchData = useCallback(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      setAppointmentList(data)});
  },[])

  useEffect(()=>{
    fetchData()
  },[fetchData])

return(
  <div style={{marginTop:"4rem" ,textAlign:"center"}} className="App container mx-auto">
    <h1  className="inline text-3xl mx-5 mb-8"><BiArchive className="inline text-3xl "/>Your Appointment</h1>
    <AddAppointment />
    <Search query={query} inputHandler={myInput=>  setQuery(myInput)}/>

    <ul className="divide-y divide-gray-200" style={{width:"60%" ,margin:"auto" , display :"grid" }}>
        {
          filteredAppointments.map(appointmentData =>(
            
            <AppointmentInfos appointment={appointmentData} 

            onDeleteAppointment={
              appointmentId =>  
              setAppointmentList(AppointmentList.filter(appointmentfilterdata => 
              appointmentfilterdata.id !== appointmentId))
            }
            
            />   // {/* This has been imported from AppointmentInfo */}
            

          ))
          
        }
            
          
      </ul>
  </div>

)
}

export default App;
