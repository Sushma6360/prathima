import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CardWrapper from './CardWrapper.js'; 
import './CardWrapper.css'
function Home() {
  return(
    <div>
      <CardWrapper/>
    </div>
  );
}

function About () {
  return (
    <h1>Hi this is xyz from css department i have 2 years experience in abc college and looking forward to explore my-self </h1>
  );
}

function Contact() {
  return <h2> xyz: 1234567894 </h2>;
}

function Routerex() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default Routerex;