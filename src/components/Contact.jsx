import "../styles/Contact.css";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


function Contact() {

  const form = useRef();

  const sendEmail = function(e) {

    e.preventDefault();

    emailjs.sendForm('service_wj4p5ci', 'template_g00mq7v', form.current, 'd1zHzIPeka79KgAGa')

      .then(function(result) {
          console.log(result.text);
      }, function(error) {
          console.log(error.text);
      });

  };


  return (

    <div className="container-fluid p-5 my-5 contact">
    
    <h2 className = "contact-title"><b>Contact</b> </h2>
    <br></br>
    <p> Interested in working together? Feel free to add me on <a href = "https://linkedin.com/in/ashley-t-smith"> Linkedin</a> or message me directly ... </p>
    <br></br>
    <br></br>

    <form ref={form} onSubmit={sendEmail}>
    <label>NAME</label>
    <input type="text" name="user_name" />
    <label>EMAIL</label>
    <input type="email" name="user_email" />
    <label>MESSAGE</label>
    <textarea name="message" />
    <br></br>
    <input className= "btn btn-dark btn-lg send-button" type="submit" value="Send" />
    </form>
    </div>

  );

}

export default Contact;
