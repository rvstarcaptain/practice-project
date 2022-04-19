import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'


export default function About() {
  return (
    <div>

      <h2>About</h2>
      <p>this is about page</p>
      <NavLink to="/users/rahul">rahul</NavLink><br></br>
      <NavLink to="/users/rohit">rohit</NavLink><br></br>
      <NavLink to="groups">groups</NavLink><br></br>
      <NavLink to="channel">channel</NavLink><br></br>
      <NavLink to="others">others</NavLink><br></br>
      <Outlet />


    </div>
  )
}
