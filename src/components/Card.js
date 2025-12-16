import React from 'react'

const Card = ({items}) => {
  return (
    <div>
        <h3>Details</h3>
        <div className='list'>
            {items.map((item)=>(
            <div className="card" key={item.id}>
         
          <h3 className="card-title" >{item?.name}</h3>
           <img className="card-img" src={item?.image} alt="Employee"></img>
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
