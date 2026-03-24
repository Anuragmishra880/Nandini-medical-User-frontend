import "./Contact.css";
import { useSelector } from "react-redux";
import ShimmerContact from "../../Components/UI/ShimmerContact";

const Contact = () => {
  const { loading } = useSelector((state) => state.product);
  if (loading) {
    return <ShimmerContact />;
  }
  return (
    <div className="ContactSection">
      <div className="Contact">
        <h2>Get In Touch</h2>
        <p>PH NO.. 7123424103</p>
        <p>E-MAIL: abc@gmail.com</p>
        <a
          href="https://wa.me/917123424"
          target="_blank"
          className="btn btn-success mt-3"
        >
          💬 WhatsApp
        </a>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7148.508559552079!2d85.08773110473517!3d26.382971370306798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ecd767eb19817b%3A0x8405ba0b8b9f7e88!2sNANDANI%20MEDICAL%20HOLL!5e0!3m2!1sen!2sin!4v1768512736690!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Contact;
