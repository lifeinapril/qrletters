

import React, { useEffect,useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Foot from './components/Bars/Foot';
import Splash from './components/Sections/Splash';
import app from "./Config";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './css/Splash.css';
import Code from './pages/Code';
import Message from './pages/Message';
import Secure from './pages/Secure';

const Letter = function(props){
  const [isLoading,setLoader] = useState(true);
    useEffect(()=>{
      setTimeout(() =>{
        setLoader(false);
      },8000);
    }, []);

return (
  <>
  {
  isLoading ?
       <>
          <Splash/>
       </> :
  <>
  <Router>
      <Routes>
          <Route path='/' element={<Home name={app.name} icon={app.icon}/>}/>
          <Route path='/code/:id' element={<Code/>}/>
          <Route path='/secure/:id' element={<Secure/>}/>
          <Route path='/:id' element={<Message/>}/>
      </Routes>
  </Router>
  <br/>
  <br/>
  <br/>
  <br/>
  <Foot contacts={app.contacts} bg="bg-dark" name={app.name}/>
  </>
}
</>
)

}
export default Letter;
