import React from 'react'
import { AiFillRocket } from 'react-icons/ai';
import me2 from "../assests/ab4.png.png";
import "../styles/Header.css"
const Header = () => {
  return (
    <div class ="navbar">
      <NavContent/>
    </div>
  );

    
   
  
}
const NavContent = ()=>{
  return (
    <>

    <h2>Sachin.</h2>
    <div className='name'>
      <a href ="#home">Home</a>
      <a href ="#work">Aboutme</a>
      <a href ="#services">Services</a>
      <a href ="#skill-page">Skills</a>
      <a href ="#education">Education</a>
      <a href ="#contact">Contact</a>
    </div>
    <a href="mailto:sachinpathak0042@gmail.com">
      <button class=" buton">Email</button>
    </a>
    
    
  </>
  );
   
  
  

}

export default Header
