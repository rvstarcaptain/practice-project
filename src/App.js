// import './App.css';
import { Route } from 'react-router-dom';
import Nav from './Component/Nav';
import Home from './Component/Home';
import About from './Component/About';

import {Routes} from 'react-router-dom';
import PagenotFount from './Component/PagenotFound';
import { useEffect, useState } from 'react';
import List from './Component/List';
import Loadinglist from './Component/Loadinglist';
import ManishList from './Component/ManishList';
import WithProps from './Component/WithProps';
import RoutingLink from './Component/RoutingLink';


function App() {
//   const data= [
//     {name:"thing one", id:1, list : ['abc','xyz'] },
//     {name:"thing two", id:2, list : ['abc','xyz'] },
//     {name:"thing three", id:3, list : ['abc','xyz'] },


// ]
  return(
    <div>
      
      {/* <Loadinglist/> */}
      {/* <ManishList/> */}
      {/* <WithProps data={data}/> */}
      <Nav/>
      <RoutingLink/>
      
    </div>
  )
  
}

export default App;
