import React from 'react'

const Card = ({items}) => {
  return (
    <div>
        <h3>Details</h3>
        <div className='list'>
            {items.map((item)=>(
            <div class="card" key={item.id}>
         
          <h3 class="card-title" >{item.name}</h3>
           <img class="card-img" src="${item?.image}" ></img>
          <p class="card-text">Age: {item.age}</p>
        </div>
        
        ))}
        </div>
    </div>
  )
}

export default Card
