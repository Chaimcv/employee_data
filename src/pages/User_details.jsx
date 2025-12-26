import React from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card';

const User_details = () => {
  const { id } =useParams();
  
  return (
    <div>
      <p>{id}</p>
    </div>
  )
}
// const Cardd =({items}) =>{
//   const filter=items.filter(items.id===id);
//   return (
//     <div>
//       <h3>{items.name}</h3>
//     </div>
//   )
// }

export default User_details  