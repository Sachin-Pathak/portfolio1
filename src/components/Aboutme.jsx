import React from 'react'
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import my from "../assests/g.png";
import "../styles/Aboutme.css"


const Work = () => {
  return (
    <div id="work">
     <h2>About Me</h2>
      <div className="content">
        <img src={my} alt="Profile" className="profile-picture" />
        <div className="bio">
          <h3>Hi, I'm Sachin Pathak</h3>
          <p>
            I am a Coder, passionate Full Stack  web developer with a strong interest in front-end development. I enjoy building
            user-friendly and responsive websites using the latest web technologies like HTML, CSS, and JavaScript.
            My goal is to create engaging and visually appealing web experiences.
          </p>
          <p>
            In my free time, I love experimenting with new web design trends, learning new technologies, and
            contributing to open-source projects. I believe in continuous learning and strive to improve my skills
            every day.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Work
