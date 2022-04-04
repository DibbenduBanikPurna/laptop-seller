import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Home from './Components/Home/Home/Home';


import Navbars from './Components/Navbar/Navbar';
import Review from './Components/Review/Review';


function App() {

  return (
    <div className="App">
       <Navbars/> 
    
       <Routes>  
         <Route path="/" element={<Home/>} />
        <Route path="/reviews" element={<Review/>} /> 
        <Route path="/dashboard" element={<Dashboard/>} /> 
       
      </Routes> 
    
    
    </div>
  );
}

export default App;
