
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);



  useEffect(()=>{
    const getStudents = async () => {
      try {
        const res = await axios.get("http://localhost:8080");
        console.log(res.data); // Use res.data to access the response data
        setData(res.data); // Update the data state with the response data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getStudents();
  },[])


  return (
    <ul role="list" className="divide-y divide-gray-100 px-32">
    <li className="grid grid-cols-4 gap-12 py-4">
      <div className="flex min-w-0 gap-x-4">
        <div className="min-w-0 flex-auto">
          <p className="mt-1 truncate text-xs leading-5 text-gray-500 font-bold">SL</p>
        </div>
      </div> 
      <div className="flex min-w-0 gap-x-4">
        <div className="min-w-0 flex-auto">
          <p className="mt-1 truncate text-xs leading-5 text-gray-500 font-bold">Name</p>
        </div>
      </div>
      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <p className="text-sm leading-6 text-gray-900 font-bold">Email</p>
      </div>   
       <div className="flex items-center justify-start">
        <p className="text-sm leading-6 text-gray-900 font-bold">Action</p>
      </div>
    </li>
{
  data?.map((row)=>     <li className="grid grid-cols-4 gap-12 py-2" key={row.id}>
  <div className="flex min-w-0 gap-x-4">
    <div className="min-w-0 flex-auto">
      <p className="mt-1 truncate text-xs leading-5 text-gray-500">{row.id}</p>
    </div>
  </div> <div className="flex min-w-0 gap-x-4">
    <div className="min-w-0 flex-auto">
      <p className="mt-1 truncate text-xs leading-5 text-gray-500">{row.name}</p>
    </div>
  </div>
  <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
    <p className="text-sm leading-6 text-gray-900 ">{row.email}</p>
  </div>   
   <div className="flex shrink-0  items-center gap-2">
   <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Edit</button> 
      <button type="submit" className="rounded-md bg-red-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Delete</button>
  </div>
</li>)
}


  </ul>
  );
}

export default App;
