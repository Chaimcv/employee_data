import React from 'react'
import User_details from '../pages/User_details';
import{Link} from 'react-router-dom';


const Card = ({items}) => {
  // const[eid,setEmployeeid]=useState();
  // const id=function(){
  //   setEmployeeid=${items.id};
  // }
 
  return (
    <div class="grid grid-cols-4  bg-blue-300">
        {/* <h4 class="bg-blue-200">Details</h4> */}
           
            <div class="bg-blue-600 p-4 border-double" key={items.id}>
         
               <h3 class="font-bold" >{items?.name}</h3>
           <img src={items?.image} alt="Employee"></img>
          
           <button >View Details</button>
  
           
           {/* <p>Designation: {items?.designation}</p>
            <p className="card-department">Department: {items?.department}</p>
            <p className="card-shift">Shift: {items?.shift}</p> */}
       
        </div>
        
    </div>
  )
}

export default Card
