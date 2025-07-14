import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ContactUs() {
  const form = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_4650pij',
      'template_o9a8alh',
      form.current,
      'p9876c611xZhNrhvZ'
    ).then(() => {
      navigate('/thank-you');
    }).catch(err => {
      alert('❌ Email failed: ' + err.text);
    });
  };

  return (
    <div className="container my-5">
      <h2 className="section-title">📞 Contact Us</h2>

      <div className="row g-4">
        {/* Left: Contact Form */}
        <div className="col-md-6" data-aos="fade-right">
          <div className="form-container">
            <h5 className="mb-3">📬 Send Us a Message</h5>
            <form ref={form} onSubmit={handleSubmit}>
              <input name="user_name" type="text" className="form-control mb-2" placeholder="Your Name" required />
              <input name="user_email" type="email" className="form-control mb-2" placeholder="Your Email" required />
              <textarea name="message" rows="4" className="form-control mb-2" placeholder="Your Message..." required></textarea>
              <button type="submit" className="btn btn-warning w-100">Send Message</button>
            </form>
          </div>
        </div>

        {/* Right: Contact Info + Map Placeholder */}
        <div className="col-md-6" data-aos="fade-left">
          <div className="bg-light p-4 rounded shadow-sm h-100">
            <h5 className="mb-3">🏢 Institute Address</h5>
            <p><strong>EduPortal Institute of Management</strong></p>
            <p>2nd Floor, Knowledge Park, FC Road, Pune - 411004</p>
            <p>📧 Email: info@eduportal.com</p>
            <p>📞 Phone: +91 9876543210</p>
            <hr />
            <h6>🌐 Google Map (Coming Soon)</h6>
            <div style={{ background: "#ddd", height: "200px", borderRadius: "10px" }} className="d-flex align-items-center justify-content-center text-muted">
              Map Placeholder
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
