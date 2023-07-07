import React from 'react';
import {DiCss3, DiJavascript1, DiReact, DiNodejsSmall, DiMongodb, DiFirebase, DiJava, DiPython, DiCode, DiMysql } from 'react-icons/di';
import { AiFillHtml5, AiFillGithub} from 'react-icons/ai';
import "../styles/Skills.css";

const Skills = () => {
  return (
    <div id="skill-page">
      <h2>Skills</h2>
      <div className="skill-container">
        <div className="skill-item1">
          <h3>Full Stack Web Development</h3>
          <ul>
          <li><AiFillHtml5 size ={40} style={{ color: '#E34C26' }} /> HTML</li>
            <li><DiCss3 size ={40} style={{ color: '#2965f1' }} /> CSS</li>
            <li><DiJavascript1 size ={40} style={{ color: '#F0DB4F' }} /> JavaScript</li>
            <li><DiReact  size ={40} style={{ color: '#61DAFB' }} /> React js</li>
            <li><DiNodejsSmall  size ={40} style={{ color: '#6CC24A' }} /> Node js</li>
            <li><DiCode  size ={40} style={{ color: 'blue' }} /> Express js</li>
            <li><DiMongodb  size ={40} style={{ color: '#4DB33D' }} /> Mongo DB</li>
            <li><DiFirebase  size ={40} style={{ color: '#FFCA28' }} /> Firebase</li>
          </ul>
        </div>
        <div className="skill-item2">
          <h3>Software Development</h3>
          <ul>
          <li><DiJava  size ={40} style={{ color: '#007396' }} /> Java</li>
            <li><DiPython  size ={40} style={{ color: '#3776AB' }} /> Python</li>
            <li><DiCode  size ={40} style={{ color: 'blue' }} /> C++</li>
            <li><DiMysql  size ={40} style={{ color: 'skyblue' }} /> My SQL</li>
            <li><AiFillGithub  size ={40} style={{ color: '#000000' }} /> Git</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
