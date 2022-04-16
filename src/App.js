// import './App.css';
import { Route } from 'react-router-dom';
import Nav from './Component/Nav';
import Home from './Component/Home';
import About from './Component/About';

import {Routes} from 'react-router-dom';
import PagenotFount from './Component/PagenotFount';

function App() {
  return (
    <div >
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<PagenotFount/>} />
      </Routes>




    </div>
  );
}

export default App;
