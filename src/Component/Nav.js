import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'


export default function Nav() {
    return (
        <div>
            <Link to="/">Home</Link><br></br>
            <Link to="/about">About</Link><br></br>
            

        </div>
    )
}
