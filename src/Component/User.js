import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const params = useParams();
    const {name} = params ;
    
  return (
    <div>
        <p>this is {name}'s post</p>
    </div>
  )
}
