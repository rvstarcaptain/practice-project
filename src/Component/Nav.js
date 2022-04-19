import React from 'react'
import { BrowserRouter, NavLink, Outlet, Route, Routes } from 'react-router-dom'



export default function Nav() {
    return (
        <div>
            
           
            

            <NavLink to="/">Home</NavLink><br></br>
            <NavLink to="/about">About</NavLink><br></br>
            <NavLink to="/login">loginPage</NavLink><br></br>
            
           
           

        </div>
    )
}
