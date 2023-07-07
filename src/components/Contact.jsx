import React from 'react'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import "../styles/Contact.css"
import ne from "../assests/a3.png.png";
const Contact = () => {
  return (
    <div id = "contact">
        <section>
            <form>
                <h2> <FaEnvelope size={40} style= {{color:'#ffcc00'}}/>   Contact Me</h2>
                <input type="text" placeholder="Your Name" required/>
                <input type="email" placeholder="Your Email" required/>
                <input type="text" placeholder="Your Message" required/>
                <button type="submit">Send</button>
            </form>
        </section>
      <aside className='element'>
        <img src ={ne} alt = "Graphics"/>
      </aside>
    </div>
  )
}

export default Contact
