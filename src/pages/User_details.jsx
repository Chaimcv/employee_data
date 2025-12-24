import React from 'react'
import { useParams } from 'react-router-dom'

const User_details = () => {
  const { id } =useParams();
  return (
    <div>
      <p>{id}</p>
<h4>test</h4>
    </div>
  )
}

export default User_details