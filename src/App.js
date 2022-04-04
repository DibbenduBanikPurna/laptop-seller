import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Home from './Components/Home/Home/Home';


import Navbars from './Components/Navbar/Navbar';
import NotFound from './Components/NotFound/NotFound';
import Review from './Components/Review/Review';


function App() {

  return (
    <div className="App">
       <Navbars/> 
    
       <Routes>  
         <Route path="/" element={<Home/>} />
        <Route path="/reviews" element={<Review/>} /> 
        <Route path="/dashboard" element={<Dashboard/>} /> 
        <Route path="/blog" element={<Blog/>} /> 
        <Route path="/about" element={<About/>} /> 
        <Route path="*" element={<NotFound/>} /> 
       
      </Routes> 
    
    
    </div>
  );
}

export default App;
