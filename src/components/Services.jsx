import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Services.css';
import { AiFillDatabase, AiFillCode, AiFillHtml5 } from 'react-icons/ai';
import { SiReact } from 'react-icons/si';


const Services = () => {
  return (
    <div id="services">
      <h2>Services</h2>
      <section>
        <div className="box1">
          <motion.div
            className="serviceBox1"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AiFillCode />
            <p>Proefficient in DSA</p>
          </motion.div>
        </div>

        <div className="box2">
          <motion.div
            className="serviceBox2"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <AiFillHtml5 />
            <span>Front End Development</span>
          </motion.div>
        </div>

        <div className="box3">
          <motion.div
            className="serviceBox3"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <AiFillDatabase />
            <span>Backend Development</span>
          </motion.div>
        </div>

        <div className="box4">
          <motion.div
            className="serviceBox4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <SiReact />
            <span>React Developer</span>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;

