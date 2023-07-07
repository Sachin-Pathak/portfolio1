import React from 'react'
import { motion } from "framer-motion";
import Typewriter from 'react-typewriter-effect';
import me from "../assests/ab.png.png";
import "../styles/Home.css"
const animation1 = {
  h1:{
    initial:{
      x: "-100%",
      opacity:0,
    },
    whileInView :{
       x:0,
       opacity:1,
    },
  },
};

const Home = () => {
  return (
    <div id = "home">
        <section class ="theory">
          <div>
            <motion.h1{...animation1.h1}>
              Hi, I Am <br/> Sachin Pathak<br/>

            <p>A Passionate Coder <br/>Full Stack Web Developer <br/>Designer</p>
            </motion.h1>          
           
            <div>
                <a href="mailto:sachinpathak0042@gmail.com">Hire Me</a>
                <a href="#projects">Projects</a>
            </div>
          

            <aside>

            <article>
              <p>
                +<span>5</span>
              </p>
              <span><h2> Projects</h2> </span>
            </article>

            <article class ="contact">
              <p>
                +<span><h2>Contact</h2></span>
              </p>
              <span> sachinpathak0042@gmail.com </span>
            </article>

            </aside>

          </div>
          
        </section>
        <section class = "image">
          <img src = {me} alt="Sachin"/>
        </section>
    </div>

  )
  };

export default Home
