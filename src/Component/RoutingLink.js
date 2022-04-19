import React from 'react'
import Home from './Home'
import About from './About'
import { Route,Routes ,Navigate } from 'react-router-dom'
import PagenotFound from './PagenotFound'
import Login from './Login'
import User from './User'
import Groups from './Groups'
import Channel from './Channel'
import Others from './Others'

export default function RoutingLink() {
  return (
    <div>
            <Routes>
            <Route path='/' element={<Home/>} ></Route>
            {/* <Route path="/login" element={<Navigate to="/"/>} ></Route> */}
            <Route path="/login" element={<Login/>} ></Route>
            <Route path="/about/" element={<About/>}>
                <Route path='groups' element={<Groups/>} ></Route>
                <Route path='channel' element={<Channel/>} ></Route>
                <Route path='others' element={<Others/>} ></Route>
            </Route>
            <Route path="/users/:name" element={<User/>}></Route>
            <Route path='/*' element={<PagenotFound/>} ></Route>

            </Routes>
            
        
    </div>
  )
}
