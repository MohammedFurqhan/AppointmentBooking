import { BiCalendar ,BiCalendarPlus} from "react-icons/bi";
import { useState } from "react";

const AddAppointment =()=>{
    let [toggle , setToggle] = useState(false)
return(
    <div style={{width:"60%" , margin:"auto"}}>
        {/* This section is for add-appointment button */}
      <button onClick={()=>{setToggle(!toggle)}} className="bg-blue-400 text-white px-2 py-3 w-full text-left rounded-t-md">
        <div><BiCalendarPlus className="inline-block align-text-top" />  Add Appointment</div>
      </button>

      {/* This section is contains input-field and lables */}
      {
          toggle &&
          <div className="border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4">
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
          <label htmlFor="UserId" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            User ID
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input type="text" name="userId" id="userId"
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
          <label htmlFor="Title" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            Title
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input type="text" name="title" id="title"
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>

        {/* <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
          <label htmlFor="aptDate" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            Apt Date
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input type="date" name="aptDate" id="aptDate"
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
          <label htmlFor="aptTime" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            Apt Time
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input type="time" name="aptTime" id="aptTime"
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>
 */}
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
          <label htmlFor="Body" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            Body
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <textarea id="body" name="body" rows="3"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Detailed comments about the condition"></textarea>
          </div>
        </div>


        <div className="pt-5">
          <div className="flex justify-center">
            <button type="submit" className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
              Submit
            </button>
          </div>
        </div>
      </div>
      }
      
    </div>
)
}

export default AddAppointment