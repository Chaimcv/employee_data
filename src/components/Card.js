import React from 'react'

const Card = ({items}) => {
  return (
    <div>
        <h4 class="bg-blue-200">Details</h4>
        <div class="grid grid-cols-4 gap-4 bg-blue-300">
            {items.map((item)=>(
            <div class="bg-blue-600 p-4 border-double" key={item.id}>
         
          <h3 class="font-bold" >{item?.name}</h3>
           <img src={item?.image} alt="Employee"></img>
          <p className="card-designation">Designation: {item?.designation}</p>
           <p className="card-department">Department: {item?.department}</p>
            <p className="card-shift">Shift: {item?.shift}</p>
        </div>
        ))}
        </div>
    </div>
  )
}

export default Card
