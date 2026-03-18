import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="ContactSection">
      <div className="Contact">
        <h2>Get In Touch</h2>
        <p>PH NO.. 7123424</p>
        <p>E-MAIL: abc@gmail.com</p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7148.508559552079!2d85.08773110473517!3d26.382971370306798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ecd767eb19817b%3A0x8405ba0b8b9f7e88!2sNANDANI%20MEDICAL%20HOLL!5e0!3m2!1sen!2sin!4v1768512736690!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{"border":0}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <form className="ContactForm">
        <h1>Contact Us</h1>

        <div className="row">
          <div>
            <label htmlFor="Name">NAME</label>
            <input type="text" id="Name" />

            <label htmlFor="Email">Email</label>
            <input type="email" id="Email" />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" rows={5}></textarea>
          </div>
        </div>
        <button>Send Now</button>
      </form>
    </div>
  );
};

export default Contact;
